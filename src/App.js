import React from 'react';
import './App.css';
import './GeneralCSS/NavCss.css';
import Nav from './Components/Header';
import Carrusel from './Components/Carrusel';
import Footer from './Components/Footer';

import Home from './Home';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Nav/>
      </header>
      <body id="body">
      <Home/>
      </body>

    </div>
  );
}

export default App;

