import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carrusel from './Components/Carrusel';
import VideoComponent from './Components/VideoComponent';
import VideoReact from './Components/VideoReact';
import CardsComponent from './Components/CardsComponent';
import './GeneralCSS/Home.css';

class Home extends Component {

    render() {
        return (
          <div className="all">
            <Container>
              <Row>

                <div className="col-xs-12 col-sm-12 col-lg-12">
                  <Carrusel/>
                  <br>
                  </br>
                </div>

                <Col md="12" lg="12">

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
