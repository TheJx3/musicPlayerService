const mongoose = require('mongoose');
const data = require('../sampleData.js');

const connection = mongoose.connect('mongodb://localhost/musicPlayer', { useMongoClient: true });

console.log('GRRRREEAAAAT SUCCESSSSS!!!!!');

const songSchema = mongoose.Schema({
  _id: Number,
  title: String,
  artist: String,
  genre: String,
  album: String,
  albumArt: String,
  createdAt: Number,
  plays: Number,
  likes: Number,
  shares: Number,
  comments: Number
});

const Song = mongoose.model('Song', songSchema);

const getSong = (err, songId, callback) => {
  if (err) {
    console.log(err);
  } else {
    Song.find({ _id: songId }).exec((err, data) => {
      if (err) {
        console.log('this is in find by id', err);
      } else {
        console.log('this is data inside the db', data);
        callback(null, data[0]);
      }
    });
  }
};

const save = (err, inputSong) => {
  if (err) {
    console.log(err);
  } else {
    const song = new Song(inputSong);
    song.save(() => {
      console.log('success!', inputSong);
    });
  }
};

module.exports.save = save;
module.exports.getSong = getSong;
