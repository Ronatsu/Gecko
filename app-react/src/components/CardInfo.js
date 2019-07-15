import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

class CardInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: this.props.header,
            text: this.props.text
        }
    }

    render() {
        return (
            <Card>
                <Card.Header>{this.state.header}</Card.Header>
                <Card.Body>
                    <Card.Text>
                    {this.state.text}
                    </Card.Text>                   
                </Card.Body>
            </Card>
        );
    }

}
export default CardInfo;