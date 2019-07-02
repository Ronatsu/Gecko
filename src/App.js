import React from 'react';
import './App.css';
import './GeneralCSS/NavCss.css';
import Nav from './Components/Header';
import Carrusel from './Components/Carrusel';
import Footer from './Components/Footer';
import Tour from './TourPages/Tours';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Nav></Nav>
      </header>
      <body id="body">
      <Tour></Tour>
      </body>
      <footer id="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;

