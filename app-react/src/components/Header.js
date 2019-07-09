import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ShoppingCart } from '@material-ui/icons';
import '../components/NavCss.css';
import { Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import TableShopping from '../components/TableShopping';
import carrito from '../Json/carrito.json';
import * as jsPDF from "jspdf";
import { renderToString } from "react-dom/server";

import TravelList from '../components/TravelList';
import TravelInput from '../components/TravelInput';

class Header extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    pdfDownload() {
        console.log('Button was clicked2!')
        const string = renderToString( <TravelList />);
        const doc = new jsPDF();


        doc.setFontSize(22);
        doc.setTextColor(255, 0, 0);
        doc.text(10, 10, 'Gecko Aventuras');

        doc.setFontSize(12);
        doc.setTextColor(24, 24, 24);
        doc.text(10, 20, 'Cliente: Ronny Alvarez Gomez');
        doc.text(10, 30, 'Correo: ronny23780797@gmail.com');
        doc.text(10, 40, 'Número Teléfonico: 83012564');
        doc.text(10, 50, 'Dirección: San Roque, Grecia');
        doc.text(10, 60, 'Fecha Emision: 23 de Julio 2019');
        doc.text(10, 70, 'Gecko Aventuras es una empresa desarrollado por estudiantes sin fines de lucro.');

        var x = 0
        {
            carrito.map(row => (
                <td> {x = x + row.PrecioUsuario} </td>
            ))
        }

        doc.text(10, 80, 'Monto Cancelado en Colones: ');
        const string2 = renderToString(x);
        doc.fromHTML(string2,20,80);

        doc.setFontSize(10);
        doc.setTextColor(24, 24, 24);
        doc.fromHTML(<TravelList /> , 20, 90);

        doc.save('ComprobanteGeckoAventuras.pdf');
    };

    render() {
        const { open } = this.state;
        var x = 0
        {
            carrito.map(row => (
                <td> {x = x + row.PrecioUsuario} </td>
            ))
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-light navColor">
                <a className="navbar-brand ml-4" href="#"> <img src={require("../Imagenes/logos/gecko3.png")} width="170" height="50" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto colorText mt-2">
                        <li className="nav-item mr-4">
                        <TravelInput />
                            <Link to="/"><p className="" href="#">Inicio</p></Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link to="/tour"><p className="" href="#">Tours</p></Link>
                        </li>
                        <li className="nav-item mr-4">
                            <p className="" href="#">Servicios</p>
                        </li>
                        <li className="nav-item mr-4">
                            <Link to="/blogPost"><p className="" href="#">Consejos</p></Link>
                        </li>
                        <li className="nav-item mr-4">
                            <p className="" href="#">Acerda de</p>
                        </li>
                        <li className="nav-item mr-4">
                            <p className="" href="#">Contacto</p>
                        </li>
                        <li className="nav-item mr-4">
                            <Link to="/db"><p className="" href="#">testDB</p></Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-3 mr-3 colorCart">
                        <li className="" onClick={this.onOpenModal}>
                            <ShoppingCart id="icon" />
                        </li>
                    </ul>
                    <Modal open={open} onClose={this.onCloseModal} little>
                        <h4>Carrito de Compras</h4>
                        <TableShopping carrito={carrito} />
                        <TravelList />
                        <h4>Monto Total: ₡{x}</h4>
                        <Button onClick={this.pdfDownload} color="info">Confirmar Compra</Button>{' '}
                    </Modal>

                </div>
            </nav>
        );
    }
}


export default Header;