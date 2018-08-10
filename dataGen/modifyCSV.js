const fs = require('fs');
const through = require('through2');
const highlander = require('highlander');
const stringSource = require('./songGen').hipster;
console.log('this is the stringSource import: ', stringSource);

fs.createReadStream('./test.csv')
  .pipe(through(parse))
  .pipe(through(makeArray))
  .pipe(through(addColumn))
  .pipe(fs.createWriteStream('./test2.csv'));
  

function parse(buf, enc, next) {
  next(null, buf.toString());
};

function makeArray(line, enc, next) {
  console.log(typeof line)
  next(null, line.split(','));
};

function addColumn(lineArray, enc, next) {
  console.log(typeof lineArray);
  lineArray.push(generateString(stringSource, 4))

  next(null, lineArray.join(','));
}

function generateString (stringSource, maxLength) {
  let stringArray = stringSource.replace(/\.|,/g, '').split(' ');
  let randomLength = Math.ceil(Math.random() * maxLength);
  let title = [];
  for (let j = 0; j < randomLength; j++) {
    const randomWord = Math.floor(Math.random() * stringArray.length);
    title.push(stringArray[randomWord])
  }
  return title.join(' ');
}

function generateTime() {
  const min = 1532687016731;
  const max = 1532687216731;
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateGenre() {
  const genres = ['Blues', 'Electronic', 'Pop', 'R&B', 'HipHop', 'Country', 'Jazz', 'Rock'];
  return genres[Math.floor(Math.random() * genres.length)];
}

// x { id: Number, 
// x   title: String, 
// x   artist: String, 
// x   genre: String, 
// -   album: String, 
//    albumArt: String, 
//    songFile: String, 
//    createdAt: Number }
