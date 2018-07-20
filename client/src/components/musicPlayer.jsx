import React from 'react';
import $ from 'jquery';
import songs from '../../sampleData.js'

class VideoPlayer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			currentSong: 1
		}
	}

	playButtonHandler() {
		// plays a static song
	}


	artistClickHandler() {
		// goes to a static a static artist page
	}


	albumClickHandler() {
		// goes to a static album page
	}

	genreClickHandler() {
		// goes to a static genre page
	}

	albumArtClickHandler() {
		// pops up the album art
	}

	getSongData() {
		// GET request to fetch song data
	}

	componentDidMount() {
		getSongData();

	}

	render() {
		return <div>This is the video player</div>
	}

}

export default MusicPlayer;