import React, { Component } from "react";
import '../AboutUs/AboutUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { ShoppingCart } from '@material-ui/icons';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class AboutUs extends Component {
    constructor() {
        super();
        this.state = {
            infoPage: []
        }
    }

    componentWillMount() {
        console.log("Legue aqui");
        axios.get(`http://localhost:9000/MedicalInfo/getInfoPage`)
            .then(res => {
                const tours = res.data;
                this.setState({ infoPage: tours[0] });
                console.log(tours[0]);
            })


        console.log(this.state.infoPage);
    }


    render() {

        let info = this.state.infoPage.map((info_page) =>
            <Card>
                <Card.Body>
                    <Card.Title>{info_page.titleText}</Card.Title>
                    <Card.Text>
                        {info_page.text}
                    </Card.Text>


                </Card.Body>
            </Card>
        );

        let dataEnterprise =
            <div className="infoEnterprise" fluid>
                <ShoppingCart /><h4>+506 8888-8888</h4>
                <ShoppingCart /> <h4>Gecko Aventuras S.A</h4>
                <ShoppingCart /> <h4>Alajuela, Costa Rica</h4>
            </div>
            
        return (
            <div className="DivAbout">
                <Container className="CssAbout">
                    <Row className="CssAbout">

                        <Col lg="12" >
                            <Row>
                                <Col lg="4" className="CssAbout">
                                    <Figure>
                                        <Figure.Image
                                            width={300}
                                            height={300}
                                            alt="300x300"
                                            src={require("../Imagenes/logos/gecko2.png")}
                                        />
                                    </Figure>
                                    {dataEnterprise}
                                </Col>

                                <Col className="CssAbout">
                                    {info}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default AboutUs;