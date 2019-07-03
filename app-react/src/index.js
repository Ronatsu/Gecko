import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRoutes from './routes/routes';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);
serviceWorker.unregister();
