import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Switch>
          <div>
              <Route exact path="/" component={Home} />
          </div>
      </Switch>
    );
  }   

}
export default App;
