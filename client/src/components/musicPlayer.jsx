import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import songs from '../../../sampleData.js';

class MusicPlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSong: songs[0]
    };
  }

  componentDidMount () {
    this.getSongData(69);
  }

  getSongData (songId) {
    // GET request to fetch song data
    $.get(`/api/songs/${songId}`, null, (data) => {
      this.setState({ currentSong: data });
      console.log(this.state.currentSong);
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
        This is the music player
      </div>
    );
  }
}

ReactDOM.render(<MusicPlayer />, document.getElementById('app'));

export default MusicPlayer;
