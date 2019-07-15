import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../components/Card.css';


class TourCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="card-deck">
                        <div class="card card-shadow text-center jj">
                            <div class="card-body">
                                <h4 class="card-title">{this.props.tour.name}</h4>
                                <p class="card-text">{this.props.tour.descripcion}</p>
                                <div class="dropdown-divider"></div>
                                <p class="card-text"><small class="text-muted">Team A</small></p>

                            </div>
                        </div>
                    </div>
        );
    }
}

export default TourCard;