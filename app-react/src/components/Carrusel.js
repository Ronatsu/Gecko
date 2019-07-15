import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import axios from 'axios';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listLastTours: []
        }
        console.log("Lista en el carrusel: " + this.state.listLastTours);
    }

    componentDidMount() {
        console.log("Legue aqui");
        axios.get(`http://localhost:9000/MedicalInfo/getLastTour`)
            .then(res => {
                const tours = res.data;
                this.setState({ listLastTours: tours[0] });
                //this.state.listLastTours = tours;
                console.log(this.state.listLastTours);
            })
    }

    render() {

        let lastTours = this.state.listLastTours.map((tours) =>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../Imagenes/volPoas.jpg")}
                    alt="First slide"
                    height="400"
                />
                <Carousel.Caption>
                    <h3>{tours.nameTour}</h3>
                    <p>{tours.descriptionTour}</p>
                </Carousel.Caption>
            </Carousel.Item>
        );

        return (
            <Carousel>
                {lastTours}
            </Carousel>
        );
    }
}

export default Header;