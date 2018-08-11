const fs = require('fs');
const through = require('through2');
const highland = require('highland');
const { stringSource } = require('./songGen');

// highland(fs.createReadStream('./test.csv', 'utf8'))
//   .split()
//   .map(line => line.split(','))
//   .toArray(line => line.push(generateString(stringSource, 4)))
//   // .map(line => line)
//   .each(line => console.log(line));

let genreIndex = -1;
let albumIndex = 0;

const getGenre = () => {
	const genres = [
  'African heavy metal',
  'African hip hop',
  'Afrobeat',
  'Apala',
  'Benga',
  'Bongo Flava',
  'Bikutsi',
  'Cape Jazz',
  'Chimurenga',
  'Congolese rumba',
  'Coupé-Décalé',
  'Fuji music',
  'Palm-wine',
  'Raï',
  'Sakara',
  'Sega',
  'Seggae',
  'Semba',
  'Shangaan electro',
  'Soukous',
  'Anison',
  'Cantopop',
  'C-pop',
  'Enka',
  'Hong Kong English pop',
  'J-pop',
  'Kayōkyoku',
  'K-pop',
  'Mandopop',
  'Onkyokei',
  'P-pop',
  'Taiwanese pop',
  'African blues',
  'Blues rock',
  'Blues shouter',
  'British blues',
  'Canadian blues',
  'Chicago blues',
  'Classic female blues',
  'Electronic rock',
  'Alternative dance',
  'Indietronica',
  'Coldwave',
  'Dance-punk',
  'Dark wave',
  'Electroclash',
  'Electronicore',
  'Electropunk',
  'Ethereal wave',
  'Krautrock',
  'Minimal wave',
  'New rave',
  'Nu-gaze',
  'Space rock',
  'Synthpop',
  'Electronica',
  'Berlin School',
  'Dubtronica',
  'Ethnic electronica',
  'Folktronica',
  'Funktronica',
  'Laptronica',
  'Livetronica',
  'Indie folk',
  'Industrial folk',
  'Neofolk',
  'Progressive folk',
  'Protest song',
  'Compas',
  'Zouk',
  'Reggaetong',
  'Tropical',
  'Bachata',
  'Bolero',
  'Criolla',
  'Cumbia',
  'Chicha',
  'Porro',
  'Guajira',
  'Mambo',
  'Merengue',
  'Rumba',
  'Salsa',
  'Salsa romántica',
  'Son',
  'Timba',
  'Tropipop',
  'Vallenato']

  if (genreIndex < 87) {
    genreIndex = genreIndex + 1; 
  } else {
    genreIndex = -1;
  }

  return genres[genreIndex];
}

const getAlbumPhoto = () => {
	if (albumIndex < 587) {
		albumIndex += 1;
	} else {
		albumIndex = 0;
	}

	return `https://s3-us-west-1.amazonaws.com/hackreactor-sdc/${albumIndex}.png`

}

const generateListings = () => {
  const rl = readline('./test.csv', {
    retainBuffer: true
  });
  console.log('generateListings');
  let out = fs.createWriteStream('./test2.csv', {flag: 'a'});
  rl.on('line', (line) => {
    const lineStr = line.toString();
    const lineSplit = lineStr.split(',');
    out.write(`${lineSplit[0]},${lineSplit[1]},${lineSplit[2]},${getGenre()},${generateString(stringSource, 2)},${getAlbumPhoto()},${'songfile'},${'createdAt'}\n`) 
  }); 
}

const getAlbumPhoto = () => {
	if (albumIndex < 587) {
		albumIndex += 1;
	} else {
		albumIndex = 0;
	}
	return `https://s3-us-west-1.amazonaws.com//${albumIndex}.png`
}

fs.createReadStream('./test.csv')
  .pipe(through(parse))
  .pipe(through(makeArray))
  // .pipe(through(addColumn))
  .pipe(fs.createWriteStream('./test2.csv'));
  

function parse(buf, enc, next) {
  next(null, buf.toString());
};

function makeArray(line, enc, next) {
  console.log();
  next(null, line.toString().split('\n').concat(`,${generateString(stringSource, 3)}`));
};

function addColumn(lineArray, enc, next) {
  console.log(typeof lineArray);
  lineArray.toString();
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
// -   album: String, //name
//    albumArt: String, 
//    songFile: String, 
//    createdAt: Number }
