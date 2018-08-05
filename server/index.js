const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();

const port = 6969;

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

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

app.listen(port, () => console.log(`Your server has connected and is listening on port: ${port}!!`));
