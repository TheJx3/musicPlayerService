const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 6969;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/songs/:songId', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => console.log(`Your server has connected and is listening on port: ${port}!!`));
