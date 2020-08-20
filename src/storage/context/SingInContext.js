import React, { createContext, useState } from 'react';
import {_checkToken, _logIn} from '../actions/SignInActions'


export const SignInContext = createContext(null);

export const SignInProvider = ({children}) => {
  const token = localStorage.getItem('T0ken');
  const [signInState, setSignInState] = useState(!!token);
  

  function checkToken() {
    _checkToken(token)
    .then(() => {
      setSignInState(true);
    })
    .catch(() => {
      setSignInState(false);
    });
  }

  function isLogged() {
    return signInState;
  }

  function logIn(data) {
    _logIn(data)
    .then(result => {
      localStorage.setItem('T0ken', result.data.data.token);
      setSignInState(true);
    })
    .catch(error => {
      localStorage.setItem('T0ken', null);
      setSignInState(false);
      window.alert('Falha ao logar.')
    });

    return signInState;
  }

  function logOut() {
    localStorage.setItem('T0ken', null);
    setSignInState(false);

    return signInState;
  }

  /** Implementar */
  // function register(data) {
  //   _register(data)
  //   .then(result => {
  //     window.alert('Cadastro realizado com sucesso');
  //     window.location.replace(`${window.location.origin}/`);
  //     setSignInState({token: null});
  //   })
  //   .catch(error => {
  //     setSignInState({token: null});
  //   });
  // }

  return (
    <SignInContext.Provider value = {{logIn, logOut, isLogged, checkToken}}>
      {children}
    </SignInContext.Provider>
  );
}