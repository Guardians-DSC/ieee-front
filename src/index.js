import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from './components/Task/Register';
import MemberRegister from './components/Member/MemberRegister';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}/>
            <Route path="/novaAtividade" component={Register}/>
            <Route path="/novoMembro" component={MemberRegister}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
