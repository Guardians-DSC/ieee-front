import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}/>
            <Route path="/new-task" component={Header}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
