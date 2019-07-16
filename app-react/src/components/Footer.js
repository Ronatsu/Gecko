import React, { Component } from "react";
import './FooterCss.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPhone, faPrint, faEnvelope } from '@fortawesome/free-solid-svg-icons'
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

              <FontAwesomeIcon className="mr-4" icon={faFacebookF} />
              <FontAwesomeIcon className="mr-4" icon={faTwitter} />
              <FontAwesomeIcon className="mr-4" icon={faGooglePlusG} />
              <FontAwesomeIcon className="mr-4" icon={faLinkedinIn} />
              <FontAwesomeIcon className="mr-4" icon={faInstagram} />

            </div>
          </div>
        </div>
        <div class="container text-center text-md-left mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase font-weight-bold">Company name</h6>
              <hr className="greenColor accent-2 mb-4 mt-0 d-inline-block mx-auto" width="140px" />
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase font-weight-bold">Products</h6>
              <hr className="greenColor accent-2 mb-4 mt-0 d-inline-block mx-auto" width="90px" />
              <p>
                <a href="#!">MDBootstrap</a>
              </p>
              <p>
                <a href="#!">MDWordPress</a>
              </p>
              <p>
                <a href="#!">BrandFlow</a>
              </p>
              <p>
                <a href="#!">Bootstrap Angular</a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase font-weight-bold">Useful links</h6>
              <hr class="greenColor accent-2 mb-4 mt-0 d-inline-block mx-auto" width="115px" />
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Shipping Rates</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase font-weight-bold">Contact</h6>
              <hr class="greenColor accent-2 mb-4 mt-0 d-inline-block mx-auto" width="80px" />
              <p><FontAwesomeIcon className="mr-3" icon={faHome} />New York, NY 10012, US</p>
              <p><FontAwesomeIcon className="mr-3" icon={faEnvelope} />info@example.com</p>
              <p><FontAwesomeIcon className="mr-3" icon={faPhone} />+ 01 234 567 88</p>
              <p><FontAwesomeIcon className="mr-3" icon={faPrint} />+ 01 234 567 89</p>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3">© 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
