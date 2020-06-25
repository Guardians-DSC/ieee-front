import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TaskRegister from './components/Task/Register/Register';
import MemberRegister from './components/Member/Register';
import * as serviceWorker from './serviceWorker';

import { UserProvider } from '../src/storage/context/UserContext';
import { TaskProvider } from '../src/storage/context/TaskContext';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <TaskProvider>
            <UserProvider>
                <Route path="/" exact={true} component={App}/>
                <Route path="/novaAtividade" component={TaskRegister}/>
                <Route path="/novoMembro" component={MemberRegister}/>
            </UserProvider>
            </TaskProvider>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
