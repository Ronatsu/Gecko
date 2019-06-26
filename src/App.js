import React from 'react';
import './App.css';
import './GeneralCSS/NavCss.css';
import Nav from './Components/Header';
import Carrusel from './Components/Carrusel';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Nav></Nav>
      </header>
      <body id="body">
      <Carrusel></Carrusel>
      </body>
      <footer id="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;

