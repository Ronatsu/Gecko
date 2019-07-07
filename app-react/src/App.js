import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
//import './GeneralCSS/NavCss.css';
import Nav from './components/Header';
import Carrusel from './components/Carrusel';
//import Footer from './components/Footer';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <header id="header">
          <Nav></Nav>
        </header>
        <body id="body">
          {children}
        </body>
        <footer id="footer">
         
        </footer>
      </div>
    );
  }
}

/*import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom';
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
}*/
export default App;