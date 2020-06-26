import React from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import TaskRegister from './components/Task/Register/Register';
import MemberRegister from './components/Member/Register';

import { UserProvider } from '../src/storage/context/UserContext';
import { TaskProvider } from '../src/storage/context/TaskContext';


const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <TaskProvider>
        <UserProvider>
          <Route path="/" exact={true} component={Dashboard}/>
          <Route path="/novaAtividade" component={TaskRegister}/>
          <Route path="/novoMembro" component={MemberRegister}/>
        </UserProvider>
        </TaskProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
