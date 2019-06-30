import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from './Components/Header';
import Carrusel from './Components/Carrusel';
import AccordionComponent from './Components/Accordion';
import VideoComponent from './Components/VideoComponent';

class Home extends Component {
<<<<<<< HEAD

    render() {
        return (
          <div>
            <Nav/>
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
=======
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <body id="body">
          <Carrusel></Carrusel>
        </body>
        <footer id="footer">
          fggg
          </footer>
      </div>

    );
  }
>>>>>>> e27cd99e160d0edb4e827b38e5fbf4b10fa06434
}

export default Home;
