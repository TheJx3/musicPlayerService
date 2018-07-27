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

const ButtonContainer = styled.div`
  padding-top: 20px;
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
`;

const GenreCreatedContainer = styled.div`
  margin-left: auto;
  margin-right: 20px;
  flex-direction: column;
`;

const GenreContainer = styled.div`
  flex-direction: row;
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

const Genre = styled.span`
  background: #999;
  font-size: 14px;
  color: #fff;
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
  padding-top: 0px;
  padding-right: 7px;
  padding-bottom: 0px;
  padding-left: 7px;
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
        album: 'Whenever You Need Sombeody'
      },
      currentSongId: 1
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
        <GenreCreatedContainer>
          <GenreContainer>
            <Genre>
              #{this.state.currentSongData.genre}
            </Genre>
          </GenreContainer>
        </GenreCreatedContainer>  
        <AlbumArtContainer>
          <AlbumArt src={`https://s3-us-west-1.amazonaws.com/streamboard-album-art/${this.state.currentSongData.albumArt}`}></AlbumArt>
        </AlbumArtContainer>
      </MusicPlayerContainer>
    );
  }
}

ReactDOM.render(<MusicPlayer />, document.getElementById('app'));

export default MusicPlayer;
