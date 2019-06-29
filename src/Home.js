import Nav from './Components/Header';
import Carrusel from './Components/Carrusel';
import React, { Component } from 'react';

class Home extends Component {
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
}

export default Home;
