import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class VideoComponent extends Component {

  render() {
    return (
      <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=nYmMXKUlgn0&t=133s'
          className='react-player'
          playing
        />
      </div>
    );
  }
}

export default VideoComponent;
