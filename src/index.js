import React from 'react';
import {render} from 'react-dom';
import * as serviceWorker from "./serviceWorker";
import App from './App.js';
import {Provider} from 'react-redux';
import {HashRouter as Router} from "react-router-dom";
import store from './redux/store';

render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
serviceWorker.unregister();
