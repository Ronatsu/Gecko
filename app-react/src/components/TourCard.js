import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../components/Card.css';


class TourCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card className="mt-3 mb-3 cardTour">
                    <CardImg className="imagen" src={require("../Imagenes/logos/gecko2.png")} />
                    <CardTitle className="centrado" >{this.props.tour.name}</CardTitle>
                </Card>
            </div>
        );
    }
}

export default TourCard;