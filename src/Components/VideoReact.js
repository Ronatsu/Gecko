
import { Player } from 'video-react';
import React, { Component } from "react";
import "../../node_modules/video-react/dist/video-react.css"; // import css


class VideoReact extends Component {
    render() {
        return (
            <Player>
                <source src="https://youtu.be/gokQtVCxslw" />
            </Player>
        );
    }

}

export default VideoReact;