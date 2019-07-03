import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Card from 'react-bootstrap/Card';

class VideoComponent extends Component {

  render() {
    return (
      <ReactPlayer
        url='https://youtu.be/gokQtVCxslw'
        className='react-player'
        playing
      />

    );
  }
}

export default VideoComponent;
