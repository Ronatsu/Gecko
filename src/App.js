import React from 'react';
import './App.css';
import './GeneralCSS/NavCss.css';
import Nav from './Components/Header';
import Carrusel from './Components/Carrusel';
import Footer from './Components/Footer';

import Blog from './Blog/entradaBlog';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Nav/>
      </header>
      <body id="body">
      <Blog/>
      </body>

    </div>
  );
}

export default App;

