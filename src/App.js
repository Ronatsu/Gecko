import React from 'react';
import './App.css';
import Nav from './Components/Header';
import Carrusel from './Components/Carrusel';

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
        fggg
      </footer>
    </div>
  );
}

export default App;

