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
            <Card className="text-left">
                <Card.Header><h3>{this.headerCard}</h3></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>
                            {this.textCard}
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CardComponent;