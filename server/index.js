const express = require('express');
const bodyParser = require('body-parser');
// const data = require('../sampleData.js');
const db = require('../database/index.js');

const app = express();

const port = 6969;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/songs/:songId', (req, res) => {
  res.send(data.songs);
});

app.listen(port, () => console.log(`Your server has connected and is listening on port: ${port}!!`));


  // used to populate the db
  // for (let i = 0; i < data.songs.length; i++) {
  //   db.save(null, data.songs[i]);
  //   console.log(data.songs[i])
  // }  

