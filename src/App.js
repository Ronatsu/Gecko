import React, { Component } from 'react';
import './App.css';
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

}
export default App;
