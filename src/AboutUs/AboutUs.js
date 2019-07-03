import React, { Component } from "react";
import '../GeneralCSS/AboutUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure'
import CardComponent from '../Components/Card';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.mision = {
            name: "Misión",
            Description: "Somos la primer empresa y sitio web enfocado en el sector turístico de occidente,"
                + " buscando dar a conocer muchos sitios desconocidos para los mismos habitantes de las zonas, "
                + " donde puedan disfrutar tranquilamente de diferentes ambientes."
                + " Nosotros como empresa estamos dedicados en el disfrute de cada persona que visite cada uno de los lugares que ofrecemos."
        }
        this.vision = {
            name: "Visión",
            Description: "Deseamos poder tener mayor compromiso con el sector turístico privado de occidente, para entablar relaciones donde nos permitan una mayor inclusión de sitios turísticos, favoreciendo cada una de las partes involucradas, para brindar un mejor y mayor servicio a todo usuario interesado en conocer estas zonas. Además, nos vemos en un período de 5 años, expandiendo nuestro alcance a no solo el occidente sino abarcar el sector turístico como por ejemplo en zonas de playa, logrando ofrecer más variedad de tours a nuestros usuarios."
        }

        this.historia = {
            name: "Historia",
            Description: "Gecko Aventuras comienzan a mediados del año 2015 por un grupo de amigos universitarios del cantón de Grecia, con ganas de salir a conocer lugares nuevos. Impulsados por estas ganas de turistear, con un bajo presupuesto económico y poco tiempo para salir a disfrutar, comenzaron a buscar lugares cercanos para poder aprovechar el tiempo y que no tuvieran que gastar mucho dinero. Sin embargo, encontrar estos lugares no fue nada fácil, ya que en internet hay poca información y cuando encontraban lugares chivas siempre eran lejos de sus hogares."
                + " Poco a poco, siempre con las ganas de pasear, conocer y explorar nuevos lugares, fueron encontrando lugares muy “chivas” y pocos conocidos, de la Zona de Occidente. Aquí es donde surge la idea de crear una empresa que ayude a las personas con sus mismos intereses, con el fin de compartir sus experiencias y brindar tours que ofrecen todo lo necesario para que todos aquellos ansiosos por pasear puedan sacarle más provecho a la experiencia."
                + " En el año 2017, la Gecko Aventuras abre sus puertas formalmente, con nuevas ideas y con el objetivo de ofrecer un servicio calificado para los viajeros de esta región, con un gran portafolio que fue creado para ofrecer una gran variedad de opciones turísticas en la Zona de Occidente."
                + " Durante el tiempo que  Gecko Aventuras se ha mantenido en funcionamiento se han ido mejorando los estándares de calidad en cuanto al servicio al cliente, buscando siempre el apoyo de la tecnología y manteniendo al personal de la Empresa, que es altamente calificado y de gran experiencia en el manejo del turismo."
        }
    }
    render() {
        return (
            <div className="DivAbout">
                <Container className="CssAbout">
                    <Row className="CssAbout">
                        <Col lg="4" className="CssAbout">
                            <Figure>
                                <Figure.Image
                                    width={300}
                                    height={300}
                                    alt="300x300"
                                    src={require("../Imagenes/logos/gecko2.png")}
                                />
                            </Figure>
                        </Col>
                        <Col lg="8" >
                            <Row>
                                <Col className="CssAbout">
                                    <CardComponent
                                        header={this.mision.name}
                                        text={this.mision.Description}
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col className="CssAbout">
                                    <CardComponent
                                        header={this.vision.name}
                                        text={this.vision.Description}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="CssAbout">
                            <CardComponent
                                header={this.historia.name}
                                text={this.historia.Description}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default AboutUs;