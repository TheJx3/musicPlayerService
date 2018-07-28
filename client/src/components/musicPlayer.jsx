import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';

const MusicPlayerContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: flex-end;
  background: linear-gradient(135deg, #4D586E, #3A67C0);
  height: 340px;
  width: 1200px;
  margin: 0 auto;
  color: white;
  padding-top: 15px;
  padding-left: 25px;
  padding-bottom: 15px;
  padding-right: 15px;
`;

const ButtonTitleContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row; 
`;

const TitleArtistContainer = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column; 
  width: 400px;
  font-weight: 100;
`;

const PlayButtonContainer = styled.div`
  justify-content: flex-start;
  border-radius: 50%;
  border-color: #FF5836;
  background: #FF5836;
  width: 60px;
  height: 60px;
  cursor: pointer;
  &:hover {
    background: #FF4137;
  }
`;
const PlayButton = styled.img`
  margin-left: 4.5px;
  margin-top: 4.5px;
  width: 50px;
  height: 50px;
`;

const ArtistContainer = styled.div`
  
`;

const AlbumContainer = styled.div`
  
`;

const AlbumArtContainer = styled.div`
  width: 340px;
  height: 340px;
`;

const GenreCreatedContainer = styled.div`
  margin-left: auto;
  margin-right: 20px;
  flex-direction: column;
  font-size: 16px;
`;

const CreatedAt = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const GenreContainer = styled.div`
  flex-direction: row;
  text-align: right;
`;

const Artist = styled.span`
  background-color: black;
  font-size: 16px;
  color: #ccc;
  padding-top: 2px;
  padding-right: 7px;
  padding-bottom: 3px;
  padding-left: 7px;
  cursor: pointer;
  ${ArtistContainer}:hover &{
    color: white;
  }
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
  cursor: pointer;
  ${AlbumContainer}:hover &{
    color: white;
  }
`;

const Genre = styled.span`
  background: #999;
  color: #fff;
  cursor: pointer;
  border-radius:20px;
  border-top-color: rgb(153, 153, 153);
  border-top-style: solid;
  border-top-width: 1px;
  border-right-color: rgb(153, 153, 153);
  border-right-style: solid;
  border-right-width: 1px;
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(153, 153, 153);
  border-left-style: solid;
  border-left-width: 0;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  padding-top: 2px;
  padding-right: 7px;
  padding-bottom: 2px;
  padding-left: 7px;
  ${GenreContainer}:hover &{
    background: #666;
    border-color: #666;
  }
`;

const AlbumArt = styled.img`
  width: 340px;
  height: 340px;
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
        id: 1,
        title: 'reprehenderit marfa quinoa bag',
        artist: 'Rick Astley',
        genre: 'Jazz',
        album: 'Whenever You Need Sombeody',
        albumArt: 'RickAstley_WheneverYouNeedSomebody.png',
        songFile: 'RickAstley_NeverGonnaGiveYouUp.mp3'
      },
      currentSongId: 2,
      play: false,
    };
    this.playButtonHandler = this.playButtonHandler.bind(this);
  }

  componentDidMount () {
    this.getSongData(this.state.currentSongId);
    console.log('this is the link', 'https://s3-us-west-1.amazonaws.com/streamboard98/music/' + this.state.currentSongData.songFile);
    }

  getSongData (songId) {
    // GET request to fetch song data
    $.get(`/api/songs/${songId}`, null, (data) => {
      this.setState({ currentSongData: data });
      document.title = this.state.currentSongData.title;
      this.audio = new Audio('https://s3-us-west-1.amazonaws.com/streamboard98/music/' + this.state.currentSongData.songFile);
    });
  }

  playButtonHandler () {
    // plays a static song
    this.setState({play: !this.state.play});
    if (this.state.play === false) {
      this.audio.play()
    } else {
      this.audio.pause()
    }
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
    let playButton;
    if (this.state.play === false) {
      playButton = 'https://s3-us-west-1.amazonaws.com/streamboard98/icons/play.png'
    } else {
      playButton = 'https://s3-us-west-1.amazonaws.com/streamboard98/icons/pause.png'
    }
    return (
      <MusicPlayerContainer>
        <ButtonTitleContainer>
          <PlayButtonContainer onClick={this.playButtonHandler}>
            <PlayButton src={playButton}></PlayButton>
          </PlayButtonContainer>
          <TitleArtistContainer>
            <ArtistContainer>
              <Artist>
                {this.state.currentSongData.artist}
              </Artist>
            </ArtistContainer>
            <div>
              <Title>
                {this.state.currentSongData.title}
              </Title>
            </div>
            <AlbumContainer>
              <Album>
                In album: {this.state.currentSongData.album}
              </Album>
            </AlbumContainer>
          </TitleArtistContainer>
        </ButtonTitleContainer>
        <GenreCreatedContainer>
          <GenreContainer>
            <CreatedAt>X Months Ago</CreatedAt>
            <Genre>
              # {this.state.currentSongData.genre}
            </Genre>
          </GenreContainer>
        </GenreCreatedContainer>  
        <AlbumArtContainer>
          <AlbumArt src={`https://s3-us-west-1.amazonaws.com/streamboard98/albumCovers/${this.state.currentSongData.albumArt}`}></AlbumArt>
        </AlbumArtContainer>
      </MusicPlayerContainer>
    );
  }
}

ReactDOM.render(<MusicPlayer />, document.getElementById('app'));

export default MusicPlayer;
