import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TaskRegister from './components/Task/TaskRegister';
import MemberRegister from './components/Member/MemberRegister';
import Register from './components/Task/Register';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}/>
            {/* <Route path="/form" component={TaskRegister}/> */}
            <Route path="/novaAtividade" component={TaskRegister}/>
            <Route path="/novoMembro" component={MemberRegister}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
