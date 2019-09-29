import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from './components/Task/TaskRegister';
import Task from './components/Task/Register';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}/>
            <Route path="/form" component={Register}/>
            <Route path="/novo" component={Task}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
