const mongoose = require('mongoose');
const data = require('../sampleData.js');

const connection = mongoose.connect('mongodb://localhost/musicPlayer', { useMongoClient: true });

console.log('GRRRREEAAAAT SUCCESSSSS!!!!!');

const songSchema = mongoose.Schema({
  id: {
    type: Number, unique: true, required: true, dropDups: true
  },
  title: String,
  artist: String,
  album: String,
  genre: String
});

const Song = mongoose.model('Song', songSchema);

const getSong = (err, songId, callback) => {
  if (err) {
    console.log(err);
  } else {
    Song.find({ id: songId }).exec((err, data) => {
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
