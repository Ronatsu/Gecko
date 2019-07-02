import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ShoppingCart } from '@material-ui/icons';
import '../GeneralCSS/NavCss.css';

class Header extends Component {

    render() {
        return (

            <Navbar className="navColor" expand="lg">
                 <Navbar.Brand className="ml-4" href="#home"><img src={require("../Imagenes/logos/gecko3.png")} width="170" height="50" /></Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ml-auto mt-2 colorText">
                         <Nav.Item className="mr-4" href="#Inicio">Inicio</Nav.Item>
                         <Nav.Item className="mr-4" href="#Tours">Tours</Nav.Item>
                         <Nav.Item className="mr-4" href="#Servicios">Servicios</Nav.Item>
                         <Nav.Item className="mr-4" href="#Consejos">Consejos</Nav.Item>
                         <Nav.Item className="mr-4" href="#Acerca">Acerca de</Nav.Item>
                         <Nav.Item className="mr-4" href="#Contacto">Contacto</Nav.Item>
                     </Nav>
                     <Nav className="ml-3 mr-3 colorCart">
                         
                     <Nav.Item><ShoppingCart id="icon"/></Nav.Item>
                     </Nav>
                 </Navbar.Collapse>
             </Navbar>
           /* <nav className="navbar navbar-expand-lg navbar-light navColor">
                <a className="navbar-brand ml-4" href="#"> <img src={require("../Imagenes/logos/gecko3.png")} width="170" height="50" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto colorText mt-2">
                        <li className="nav-item mr-4">
                            <p className="" href="#">Inicio</p>
                        </li>
                        <li className="nav-item mr-4">
                            <p className="" href="#">Tours</p>
                        </li>
                        <li className="nav-item mr-4">
                            <p className="" href="#">Servicios</p>
                        </li>
                        <li className="nav-item mr-4">
                            <p className="" href="#">Consejos</p>
                        </li>
                        <li className="nav-item mr-4">
                            <p className="" href="#">Acerda de</p>
                        </li>
                        <li className="nav-item mr-4">
                            <p className="" href="#">Contacto</p>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-3 mr-3 colorCart">
                        <li className="">
                            <ShoppingCart id="icon" />
                        </li>
                    </ul>
                </div>
            </nav>*/
        );
    }
}

export default Header;
/**
 * <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
 */