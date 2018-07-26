import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import songs from '../../../sampleData.js';

class MusicPlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSongData: {
        "id": 1,
        "title": "reprehenderit marfa quinoa bag",
        "artist": "Rick Astley",
        "genre": "Jazz",
       "album": "Whenever You Need Sombeody"
      },
      currentSongId: 9,
      // currentSongTitle: null,
      // currentSongArtist: null, 
      // currentSongGenre: null,
      // currentSongAlbum: null,
    };
  }

  componentDidMount () {
    this.getSongData(this.state.currentSongId);
  }

  getSongData (songId) {
    // GET request to fetch song data
    $.get(`/api/songs/${songId}`, null, (data) => {
      this.setState({ currentSongData: data });
      document.title = this.state.currentSongData.title;
      console.log(this.state.currentSongData);
    });
  }

  playButtonHandler () {
    // plays a static song
    this.state = this.state;
  }

  artistClickHandler () {
    // goes to a static a static artist page
    this.state = this.state;
  }

  albumClickHandler () {
    // goes to a static album page
    this.state = this.state;
  }

  genreClickHandler () {
    // goes to a static genre page
    this.state = this.state;
  }

  albumArtClickHandler () {
    // pops up the album art
    this.state.currentSong = 1;
  }

  render () {
    return (
      <div>
        <div>
          Title: {this.state.currentSongData.title}
        </div>
        <div>
          Artist: {this.state.currentSongData.artist}
        </div>
        <div>
          Album: {this.state.currentSongData.album}
        </div>
        <div>
          Genre: {this.state.currentSongData.genre}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MusicPlayer />, document.getElementById('app'));

export default MusicPlayer;
