import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import "node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';

class VideoComponent extends Component {

  render() {
    return (
      <div>
        <ReactPlayer
          url='https://youtu.be/gokQtVCxslw'
          className='react-player'
          playing
        />
      </div>
    );
  }
}

export default VideoComponent;
