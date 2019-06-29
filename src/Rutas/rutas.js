import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../Home'
import entradaBlog from '../Blog/entradaBlog'

class Rutas extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/consejos/consejo1" component={entradaBlog} />
                </div>
            </Switch>
        );
    }
}

export default Rutas;
