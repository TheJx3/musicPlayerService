import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
// import songs from '../../../sampleData.js';

const MusicPlayerContainer = styled.div`
  display: flex;
  flex-direction: row; 
  background: linear-gradient(135deg, #4D586E, #3A67C0);
  height: 340px;
  width: 1200px;
  margin: 0 auto;
  color: white;
  padding-top: 15px;
  padding-left: 25px;
  padding-bottom: 15px;
  padding-right: 15px;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  padding-top: 20px;

`;

const ButtonTitleContainer = styled.div`
padding-top: 20px;
  display: flex;
  flex-direction: row; 
`;

const TitleArtistContainer = styled.div`
  padding-left: 40px;
  display: flex;
  flex-direction: column; 
  width: 400px;
  font-weight: 100;
`;

const AlbumArtContainer = styled.div`
  width: 340px;
  height: 340px;
  align-self: center;
`;

const playButton = (<span className="fa-stack">
    <i className="fa fa-circle fa-stack-1x circle-bg"></i>
    <i className="fa fa-play-circle fa-stack-1x icon-b"></i>
</span>);

const Artist = styled.span`
  background-color: black;
  font-size: 16px;
  color: #ccc;
    padding-top: 2px;
    padding-right: 7px;
    padding-bottom: 3px;
    padding-left: 7px;
`;

const Album = styled.span`
  background-color: black;
  font-size: 16px;
  color: #ccc;
    line-height: 1;
    padding-top: 2px;
    padding-right: 7px;
    padding-bottom: 3px;
    padding-left: 7px;
`;

const AlbumArt = styled.img`

`;

const Title = styled.span`
  background-color: black;
  font-size: 24px;
  color: white;
  line-height: 2.1;
    padding-top: 4px;
    padding-right: 7px;
    padding-bottom: 4px;
    padding-left: 7px;
`;



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
      // console.log(this.state.currentSongData);
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
      <MusicPlayerContainer>
        <ButtonTitleContainer>
          <ButtonContainer>
            {playButton}
          </ButtonContainer>
          <TitleArtistContainer>
            <div>
              <Artist>
                {this.state.currentSongData.artist}
              </Artist>
            </div>
            <div>
              <Title>
                {this.state.currentSongData.title}
              </Title>
            </div>
            <div>
              <Album>
                In album: {this.state.currentSongData.album}
              </Album>
            </div>
          </TitleArtistContainer>
        </ButtonTitleContainer>

        <div>
          Genre: {this.state.currentSongData.genre}
        </div>
        <AlbumArtContainer>
          <AlbumArt src='http://via.placeholder.com/340x340'></AlbumArt>
        </AlbumArtContainer>
      </MusicPlayerContainer>
    );
  }
}

ReactDOM.render(<MusicPlayer />, document.getElementById('app'));

export default MusicPlayer;
