import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../components/Card.css';
import axios from 'axios';


class TourCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            images: [],
            services: []
        }
    }
    componentDidMount() {
        axios.post(`http://localhost:9000/BlogList/getServices`, {
            id: this.props.tour.TOUR_id
        }).then(res => {
            const servicesBD = res.data;
            this.setState({ services: servicesBD[0] });
        })

        axios.post(`http://localhost:9000/BlogList/getImages`, {
            id: this.props.tour.TOUR_id
        }).then(res => {
            const imageBD = res.data;
            this.setState({ images: imageBD[0] });
        })
    }
    render() {
        let concat = ''
        this.state.services.map((services) => {
            concat += services.service + "    "

        })
        return (
            <div>
                <div className="card text-center jj mt-3 mb-3 cardTour">
                    {this.state.images.map((images) => {
                        return (
                            <img className="img-fluid rounded imagen" src={require(`../Imagenes/${images.Image}`)} />
                        )
                    })}
                    <div className="card-block">
                        <h4 className="card-title">{this.props.tour.nameTour}</h4>
                        <div className="card-subtitle">{this.props.tour.location}</div>
                        <div className="dropdown-divider"></div>
                        <div className="card-subtitle">Servicios</div>
                        <p className="card-text"><small className="text-muted">{concat}</small></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TourCard;