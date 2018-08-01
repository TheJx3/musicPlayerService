const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const data = require('../sampleData.js');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();

const port = 6969;

app.use(cors());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use('/songs/:songId', express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/songs/:songId', (req, res) => {
  console.log('this is the req.params.songId: ', req.params.songId);
  db.getSong(null, req.params.songId, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

// app.get('/songs/:songId', (req, res) => {
//   console.log()
//   res.send()
// })

app.listen(port, () => console.log(`Your server has connected and is listening on port: ${port}!!`));

// // used to populate the db
// app.get('/api/dbSave', (req, res) => {
//   for (let i = 0; i < data.songs.length; i++) {
//     db.save(null, data.songs[i]);
//   }
//   res.send(data.songs[0]);

// });
