import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../pages/Home';
import App from '../App';
import db from '../components/AddMedicalForm';
import Tour from '../pages/Tours';
import blogList from '../pages/BlogList';
import blogPost from '../pages/blogPost';

class AppRoutes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tour" component={Tour} />
                    <Route exact path="/db" component={db} />
                    <Route exact path="/blogList" component={blogList} />
                    <Route exact path="/blogPost" component={blogPost} />
                </Switch>
            </App>
        );
    }
}

export default AppRoutes;
