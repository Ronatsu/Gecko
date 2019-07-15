
import { Player } from 'video-react';
import React, { Component } from "react";
import "../../node_modules/video-react/dist/video-react.css"; // import css


class VideoReact extends Component {
    render() {
        return (
            <Player
            poster={require("../Imagenes/colash.png")}>
                <source src={require("../Imagenes/VideoPromo.mp4")} />
            </Player>
        );
    }

}

export default VideoReact;