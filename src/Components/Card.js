import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = "";
    }

    render() {
        return (
            <Card className="text-center">
                <Card.Header>Video promocional</Card.Header>
                <Card.Body>
                    <Card.Title>Atrevete a la aventura</Card.Title>
                    <Card.Text>
                        Video promocional de Gecko aventuras.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">¡Disfruta el viaje!</Card.Footer>
            </Card>
        );
    }
}

export default CardComponent;