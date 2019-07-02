import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import EntradaBlog from './Blog/entradaBlog';

class App extends Component {
  render() {
    return (
      <Switch>
          <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/consejos/consejo1" component={EntradaBlog} />
          </div>
      </Switch>
    );
  }
>>>>>>> a470db3f588345d44202128c27e15904d48b8292

}
export default App;
