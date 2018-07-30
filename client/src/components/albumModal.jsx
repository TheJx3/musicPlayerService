import React from 'react';
import ReactDOM from 'react-dom';

const albumModal = document.getElementById('albumModal');

class AlbumModal extends React.Component {
  constructor (props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount () {
    albumModal.appendChild(this.el);
  }

  componentWillUnmount () {
    albumModal.removeChild(this.el);
  }

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

export default AlbumModal;
