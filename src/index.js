import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRoutes from './Rutas/Routes';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
