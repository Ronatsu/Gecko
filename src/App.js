import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom';
import Home from './Home';

<<<<<<< HEAD
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
=======
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
>>>>>>> e27cd99e160d0edb4e827b38e5fbf4b10fa06434

}
export default App;
