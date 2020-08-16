import React from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import TaskRegister from './components/Task/Register';
import MemberRegister from './components/Member/Register';
import ListMembers from './components/Member/ListMembers';
import NucleRegister from './components/Nucle/Register';
import ListNucle from './components/Nucle/ListNucles';

import { UserProvider } from '../src/storage/context/UserContext';
import { TaskProvider } from '../src/storage/context/TaskContext';
import { NucleProvider } from '../src/storage/context/NucleContext';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <NucleProvider> <TaskProvider> <UserProvider>
          <Route path="/" exact={true} component={Dashboard}/>
          <Route path="/novaAtividade" component={TaskRegister}/>
          <Route path="/novoMembro" component={MemberRegister}/>
          <Route path="/listarMembros" component={ListMembers}/>
          <Route path="/novoNucleo" component={NucleRegister}/>
          <Route path="/listarNucleos" component={ListNucle}/>
        </UserProvider> </TaskProvider> </NucleProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
