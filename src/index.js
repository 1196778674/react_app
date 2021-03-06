import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from "react-router-config";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import routeConfig from './router'
import './asset/less/index.less'

import { Provider } from 'react-redux'
import store from './store'

const rootApp = document.getElementById('root')


ReactDOM.render( <Provider store = { store }> 
    <Router>{renderRoutes(routeConfig)}</Router>
    </Provider> , rootApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();