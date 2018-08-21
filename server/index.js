require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const redis = require('redis');
const cassandraDB = require('../database/cassandra.js');

const app = express();
const port = 7111;

//Redis client
const client = redis.createClient();
client.on('connect', () => console.log('Connected to Redis...'))

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/songs/:id', (req, res) => {
  let selectedTrackId = req.params.id;

  client.hgetall(selectedTrackId, (err, storedSong) => {
    if (!storedSong) {
      // check db for value
      //Cassandra call
      const query = 'SELECT * FROM songs WHERE id=?';
      // console.log('db client',cassandraDB.client);
      cassandraDB.client.execute(query, [ selectedTrackId ], { prepare : true })
      .then(result => {
        let song = result.rows[0];
        let redisStorageVal = [
          'id', song.id,
          'title', song.title,
          'artist', song.artist,
          'genre', song.genre,
          'album', song.album,
          'alumart', song.albumart,
          'songfile', song.songfile,
          'createdat', song.createdat
        ];
        client.multi()
          .hset(selectedTrackId, redisStorageVal)
          .expire(selectedTrackId, 400)
          .exec((err, res) => {
            if (err) {
              console.log('Error storing on redis', err);
            } else {
              console.log('Stored in redis');
            }
          })
        res.send(song);
      }).catch(err => res.status(404).send({msg:err}));
    } else {
      console.log('Retrieved from Redis');
      res.send(storedSong);
    };
  })
});

const idGenerator = () => {
  let id = 10000000;
  return function() {
    return ++id;
  }
}

let generateID = idGenerator();

client.set('id', 10000001);

app.post('/api/songs/', (req, res) => {
  // id,title,artist,genre,album,albumArt,songFile,createdAt
  client.get('id', (err, id) => {
    let song = [
      id,
      req.body.title,
      req.body.artist,
      req.body.genre,
      req.body.album,
      req.body.albumart,
      req.body.songfile,
      req.body.createdat
    ];
    client.incr('id');
    console.log('request received', id);
    const query = 'INSERT INTO songs(id,title,artist,genre,album,albumArt,songFile,createdAt) VALUES (?,?,?,?,?,?,?,?) using ttl 30';
    cassandraDB.client.execute(query, song, { prepare : true })
      .then(() => res.send('POST request to db'))
      .catch(err => res.status(500).send({msg:err}));
  })
});

app.put('/api/songs/:id/:prop', (req, res) => {
  let selectedTrackId = req.params.id;
  let propToUpdate = req.params.prop;
  let value = req.body.value;
  let query = `UPDATE soundofcloud.songs SET ${propToUpdate} = ? WHERE id = ?`
  cassandraDB.client.execute(query, [ value, selectedTrackId ], { prepare : true })
  .then(() => res.send('POST request to db'))
  .catch(err => res.status(500).send({msg:err}));
})

app.listen(port, () => console.log(`Your server has connected and is listening on port: ${port}!!`));
