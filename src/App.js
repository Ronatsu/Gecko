import React from 'react';
import './App.css';
import Rutas from './Rutas/rutas';
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Switch>
        <div>
            <Route exact path="/" component={Home} />
        </div>
    </Switch>
  );
}

export default App;
