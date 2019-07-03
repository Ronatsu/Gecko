import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.headerCard = this.props.header;
        this.titleCard = this.props.title;
        this.textCard = this.props.text;
        this.footerCard = this.props.footer;
    }

    render() {
        return (
            <Card className="text-center">
                <Card.Header>{this.headerCard}</Card.Header>
                <Card.Body>
                    <Card.Text>
                    {this.textCard}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CardComponent;