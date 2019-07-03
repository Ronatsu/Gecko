import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';



class CardsComponent extends Component {

    render() {
        return (
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={require("../Imagenes/1200px-Poas_crater.jpg")} />
                    <Card.Body>
                        <Card.Title>Volcan Poas</Card.Title>
                        <Card.Text>
                            Volcan localizado en la zona de Alajuela, el cual cuenta con senderos, increibles vistas, zonas de picnic 
                            y multiples actividades.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../Imagenes/257996_piedra.jpg")} />
                    <Card.Body>
                        <Card.Title>Puente de piedra</Card.Title>
                        <Card.Text>
                            Puente de piedra que alberga múltiples relatos y leyendas.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require("../Imagenes/article.jpg")} />
                    <Card.Body>
                        <Card.Title>Ojo de agua</Card.Title>
                        <Card.Text>
                            Centro turistico acuatico en Alajuela, Costa Rica.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        );
    }
}

export default CardsComponent;