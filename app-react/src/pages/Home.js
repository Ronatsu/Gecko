import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
<<<<<<< HEAD:app-react/src/pages/Home.js
import Carrusel from '../components/Carrusel';
import VideoComponent from '../components/VideoComponent';
import VideoReact from '../components/VideoReact';
import CardsComponent from '../components/CardsComponent';
import './Home.css';

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

                  <VideoComponent/>
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
=======
import Carrusel from './Components/Carrusel';
import VideoComponent from './Components/VideoComponent';
import VideoReact from './Components/VideoReact';
import CardsComponent from './Components/CardsComponent';
import './GeneralCSS/Home.css';
import Card from 'react-bootstrap/Card';

class Home extends Component {

  render() {
    return (
      <div className="all">
        <Container>
          <Row>

            <div className="col-xs-12 col-sm-12 col-lg-12">
              <Carrusel />
              <br>
              </br>
            </div>

            <Col md="12" lg="12">

              <VideoReact />
              <br>
              </br>
            </Col>

            <div className="col-xs-6 col-sm-6 col-lg-12">
              <Card className="text-center">
                <Card.Header><h2>Top de ventas</h2></Card.Header>
                <CardsComponent />
                <Card.Footer className="text-muted">¡Disfruta el viaje!</Card.Footer>
              </Card>


            </div>
          </Row>
        </Container>
      </div>
    );
  }
>>>>>>> 38fbdc5b9f3439e017d7999296a2f78aa77343a9:src/Home.js
}

export default Home;
