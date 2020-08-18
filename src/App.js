import React, { useContext } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TaskRegister from './components/Task/Register';
import MemberRegister from './components/Member/Register';
import ListMembers from './components/Member/ListMembers';
import NucleRegister from './components/Nucle/Register';
import ListNucle from './components/Nucle/ListNucles';
import LogIn from './components/Login/Login'

import { UserProvider } from '../src/storage/context/UserContext';
import { TaskProvider } from '../src/storage/context/TaskContext';
import { NucleProvider } from '../src/storage/context/NucleContext';
import { SignInProvider } from '../src/storage/context/SingInContext';
import { SignInContext } from '../src/storage/context/SingInContext';

const PublicRoute = ({component: Component, ...rest}) => {
  const {isLogged} = useContext(SignInContext);
  return (
    <Route {...rest} render={props => (isLogged() ?  <Redirect to="/" /> : <Component {...props} />)} />
  );
};

const PrivateRoute = ({component: Component, ...rest}) => {
  const {isLogged} = useContext(SignInContext);
  return ( 
    <Route {...rest} render={props => ( isLogged() ? <Component {...props} /> : <Redirect to="/" />)} />
  );
};

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <SignInProvider> <NucleProvider> <TaskProvider> <UserProvider>
          <PublicRoute path="/" exact={true} component={LogIn}/>
          <PrivateRoute path="/" exact={true} component={Dashboard}/>
          <PrivateRoute path="/novaAtividade" component={TaskRegister}/>
          <PrivateRoute path="/novoMembro" component={MemberRegister}/>
          <PrivateRoute path="/listarMembros" component={ListMembers}/>
          <PrivateRoute path="/novoNucleo" component={NucleRegister}/>
          <PrivateRoute path="/listarNucleos" component={ListNucle}/>
        </UserProvider> </TaskProvider> </NucleProvider> </SignInProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
