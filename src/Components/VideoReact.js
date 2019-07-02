import "node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';
import React, { Component } from "react";



class VideoReact extends Component {
    render() {
        return (
            <Player
                playsInline
                poster=""
                src="https://youtu.be/gokQtVCxslw"
            />
        );
    }

}

export default VideoReact;