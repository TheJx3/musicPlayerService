require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const redis = require('redis');

const app = express();
const port = 7111;

const client = redis.createClient();

const cassandraDB = require('../database/cassandra.js');
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/songs/:id', (req, res) => {
  let selectedTrackId = req.params.id;
  const query = 'SELECT * FROM songs WHERE id=?';
  // console.log('db client',cassandraDB.client);
  cassandraDB.client.execute(query, [ selectedTrackId ], { prepare : true })
  .then(result => res.send(result.rows[0]))
    .catch(err => res.status(404).send({msg:err}));
});

const idGenerator = () => {
  let id = 10000000;
  return function() {
    return ++id;
  }
}

let generateID = idGenerator();

app.post('/api/songs/', (req, res) => {
  // id,title,artist,genre,album,albumArt,songFile,createdAt

  let song = [
    generateID(),
    req.body.title,
    req.body.artist,
    req.body.genre,
    req.body.album,
    req.body.albumart,
    req.body.songfile,
    req.body.createdat
  ]
  console.log('request received');
  const query = 'INSERT INTO songs(id,title,artist,genre,album,albumArt,songFile,createdAt) VALUES (?,?,?,?,?,?,?,?) using ttl 30';
  cassandraDB.client.execute(query, song, { prepare : true })
    .then(() => res.send('POST request to db'))
    .catch(err => res.status(500).send({msg:err}));
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
