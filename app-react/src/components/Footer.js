import React, { Component } from "react";
import './FooterCss.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {

  render() {
    return (
      <footer className="page-footer font-small ">
        <div className="container-fluid greenColor">
          <div className="row py-4 ">
            <div className="col-md-6 col-lg-5" /*text-center text-md-left mb-4 mb-md-0"*/>
              <h6 className="mb-0">GECKO AVENTURAS ¡Atrevete a la aventura!</h6>
            </div>
            <div className="col-md-6 col-lg-7 text-center text-md-right">

              <a href="https://www.facebook.com/"><FontAwesomeIcon className="mr-4" icon={faFacebookF} /></a>
              <a href="https://twitter.com/"><FontAwesomeIcon className="mr-4" icon={faTwitter} /></a>
              <a href="https://plus.google.com"><FontAwesomeIcon className="mr-4" icon={faGooglePlusG} /></a>
              <a href="https://www.linkedin.com/"><FontAwesomeIcon className="mr-4" icon={faLinkedinIn} /></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon className="mr-4" icon={faInstagram} /></a>

            </div>
          </div>
        </div>
        <div className="container text-center text-md-left mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Gecko Aventuras</h6>
              <hr className="greenColor accent-2 mb-4 mt-0 d-inline-block mx-auto" width="140px" />
              <p>
                La empresa esta dedicada a la promocion y distribucion de tours a lo largo de la zona de occidente, contactenos y disfruta con nosotras las multiples bellezas de la zona.

              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Contacto</h6>
              <hr className="greenColor accent-2 mb-4 mt-0 d-inline-block mx-auto" width="80px" />
              <p><FontAwesomeIcon className="mr-3" icon={faHome} />Grecia, Alajuela, CR</p>
              <p><FontAwesomeIcon className="mr-3" icon={faEnvelope} />info@geko.com</p>
              <p><FontAwesomeIcon className="mr-3" icon={faPhone} />+ 506 234 567 88</p>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3">César Jiménez - Ronald Alfaro - Kenneth Ugalde - Ronny Alvarez
        </div>
      </footer>
    );
  }
}

export default Footer;
