import React, { Component } from "react";
import '../pages/contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { MailOutline, LocationOn, PhonelinkRing, AccountCircle } from '@material-ui/icons';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class contact extends Component {

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        let ronny =
            <div className="admins" fluid>
                <AccountCircle /><h4>Ronny Álvarez (Guía)</h4>
                <PhonelinkRing /><h4>+506 8303-2323</h4>
                <MailOutline /><h4>ronny236497@hotmail.com</h4>
                <LocationOn /><h4>Grecia, Alajuela, Costa Rica</h4>
            </div>

        let cesar =
            <div className="admins" fluid>
                <AccountCircle /><h4>Cesar Jimenez (Gerente)</h4>
                <PhonelinkRing /><h4>+506 8806-7876</h4>
                <MailOutline /><h4>cesar.jime20@hotmail.com</h4>
                <LocationOn /><h4>Grecia, Alajuela, Costa Rica</h4>
            </div>

        let ronald =
            <div className="admins" fluid>
                <AccountCircle /><h4>Ronald Alfaro (Asesoría en compras)</h4>
                <PhonelinkRing /><h4>+506 7864-0321</h4>
                <MailOutline /><h4>alfaroron87@hotmail.com</h4>
                <LocationOn /><h4>Grecia, Alajuela, Costa Rica</h4>
            </div>

        let kenneth =
            <div className="admins" fluid>
                <AccountCircle /><h4>Kenneth Ugalde (Atención al cliente)</h4>
                <PhonelinkRing /><h4>+506 6021-7894</h4>
                <MailOutline /><h4>kenanyugalde@hotmail.com</h4>
                <LocationOn /><h4>Grecia, Alajuela, Costa Rica</h4>
            </div>
        return (
            <div className="DivAbout">
                <Container className="CssAbout">
                    <Row className="CssAbout">
                        <div className="col-xs-12 col-sm-12 col-lg-12">
                            <br />
                            {cesar}
                            {kenneth}
                            {ronald}
                            {ronny}
                            <br>
                            </br>
                        </div>
                        <Col md="12" lg="12" className="CssAbout">
                        <div style={{ height: '100vh', width: '100%' }}>
                            <Map google={this.props.google} zoom={14}
                                      initialCenter={{
                                        lat: 10.072832,
                                        lng: -84.311555
                                      }}>

                                <Marker onClick={this.onMarkerClick}
                                    name={'Current location'} />

                                <InfoWindow onClose={this.onInfoWindowClose}>
                                    <div>
                                   </div>
                                </InfoWindow>
                            </Map>
                            </div>
                            <br>
                            </br>
                        </Col>
                        <div className="col-xs-6 col-sm-6 col-lg-12">
                        </div>
                    </Row>
                </Container>
            </div>

        );
    }
}



export default GoogleApiWrapper({
    apiKey: ("AIzaSyD9u4LXSJjxTqHQZL58MgZ_xfEkYyUHjdw")
  })(contact)