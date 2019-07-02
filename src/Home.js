import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carrusel from './Components/Carrusel';
import VideoComponent from './Components/VideoComponent';
import VideoReact from './Components/VideoReact';
import CardsComponent from './Components/CardsComponent';

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

                  <VideoReact/>
                  <br>
                  </br>
                </Col>

                <div className="col-xs-6 col-sm-6 col-lg-12">
                <CardsComponent/>
                </div>
              </Row>
            </Container>
          </div>
        );
    }
}

export default Home;
