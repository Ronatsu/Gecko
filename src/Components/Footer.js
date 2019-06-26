import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ShoppingCart } from '@material-ui/icons';
import '../GeneralCSS/FooterCss.css';
import { Icon } from "@material-ui/core";

class Footer extends Component {

    render() {
        return (
            <footer className="page-footer font-small pt-4 footerColor">
                <div className="container">
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1">
                            <img src={require("../Imagenes/logos/facebook.png")} width="50" height="50" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1">
                            <img src={require("../Imagenes/logos/twitter.png")} width="50" height="50" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1">
                            <img src={require("../Imagenes/logos/google.png")} width="50" height="50" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1">
                            <img src={require("../Imagenes/logos/in.png")} width="50" height="50" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-dribbble mx-1">
                            <img src={require("../Imagenes/logos/dribble.png")} width="55" height="55" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                 <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
