import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';


class CardsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTopTours: []
        }
    }

    componentDidMount() {
        console.log("Legue aqui");
        axios.get(`http://localhost:9000/MedicalInfo/getTopTour`)
            .then(res => {
                const tours = res.data;
                this.setState({ listTopTours: tours[0] });
                console.log(this.state.listTopTours);
            })
    }

    render() {

        let topTours = this.state.listTopTours.map((tours) =>
            <Card>
                <Card.Img variant="top" src={require(`../Imagenes/tours/${tours.image}`)} />
                <Card.Body>
                    <Card.Title>{tours.nameTour}</Card.Title>
                    <Card.Text>
                        {tours.descriptionTour}
                    </Card.Text>


                </Card.Body>
                <Card.Footer>
                    <Link to="/tour"><Button variant="primary">Ver los tours</Button></Link>
                </Card.Footer>
            </Card>

        );


        return (
            <CardDeck>
                {topTours}
            </CardDeck>
        );
    }
}

export default CardsComponent;