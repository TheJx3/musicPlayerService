import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MusicPlayer from './components/musicPlayer.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div>
        <h1>
          SoundBoard
        </h1>
        <MusicPlayer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
