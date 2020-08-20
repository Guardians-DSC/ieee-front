import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import { useSignDataContext } from '../src/storage/context/SingInContext';

import Dashboard from './components/Dashboard/Dashboard';
import TaskRegister from './components/Task/Register';
import MemberRegister from './components/Member/Register';
import ListMembers from './components/Member/ListMembers';
import NucleRegister from './components/Nucle/Register';
import ListNucle from './components/Nucle/ListNucles';
import LogIn from './components/Login/Login'

const PublicRoute = ({ component, ...options }) => {
  const {isSignedIn} = useSignDataContext();
  const finalComponent = isSignedIn ? Dashboard : component;

  return <Route {...options} component={finalComponent} />;
};

const PrivateRoute = ({ component, ...options }) => {
  const {isSignedIn} = useSignDataContext();
  const finalComponent = isSignedIn ? component : LogIn;

  return <Route {...options} component={finalComponent} />;
};

const App = () => {
  const {checkToken} = useSignDataContext();
  checkToken();

  return(
    <BrowserRouter>
      <Switch>
        <PublicRoute  path="/login" component={LogIn}/>
        <PrivateRoute path="/" exact={true} component={Dashboard}/>
        <PrivateRoute path="/novaAtividade" component={TaskRegister}/>
        <PrivateRoute path="/novoMembro" component={MemberRegister}/>
        <PrivateRoute path="/listarMembros" component={ListMembers}/>
        <PrivateRoute path="/novoNucleo" component={NucleRegister}/>
        <PrivateRoute path="/listarNucleos" component={ListNucle}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
