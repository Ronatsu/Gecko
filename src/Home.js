import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from './Components/Header';
import Carrusel from './Components/Carrusel';
import AccordionComponent from './Components/Accordion';
import VideoComponent from './Components/VideoComponent';

class Home extends Component {

    render() {
        return (
          <div>
            <Container>
              <Row>

                <div className="col-xs-12 col-sm-12 col-lg-12">
                  <Carrusel/>
                  <br>
                  </br>
                </div>

                <Col md={{ span: 6, offset: 3 }}>

                  <VideoComponent/>
                  <br>
                  </br>
                </Col>

                <div className="col-xs-4 col-sm-4 col-lg-4">
                  <AccordionComponent/>
                </div>
              </Row>
            </Container>
          </div>
        );
    }
}

export default Home;
