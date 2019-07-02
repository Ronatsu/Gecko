import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../Home';
import App from '../App';
import Nav from '../Components/Header';
import Footer from '../Components/Footer';
import Tour from '../TourPages/Tours';

class AppRoutes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Tour" component={Tour} />
                    <Route exact path="/Header" component={Nav} />
                    <Route exact path="/Footer" component={Footer} />
                </Switch>
            </App>
        );
    }
}

export default AppRoutes;
