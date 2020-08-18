import React, { createContext, useState } from 'react';

import {_logIn, _register} from '../actions/SignInActions'

export const SignInContext = createContext(null);

export const SignInProvider = ({children}) => {
  const [logged, setLogged] = useState(false);

  function isLogged() {
    return logged;
  }

  function logIn(data) {
    _logIn(data)
    .then(result => {
      localStorage.setItem('userToken', result.data.message.token);
      setLogged(true);
    })
    .catch(error => {
      window.alert('Falha ao logar.')
      setLogged(false);
    });

    return logged;
  }

  function logOut() {
    localStorage.setItem('userToken', null);
    setLogged(false);

    return logged;
  }

  function register(data) {
    _register(data)
    .then(result => {
      window.alert('Cadastro realizado com sucesso');
      window.location.replace(`${window.location.origin}/`);
      setLogged(false);
    })
    .catch(error => {
      setLogged(false);
    });
  }

  return (
    <SignInContext.Provider value = {{logIn, logOut, register, isLogged}}>
      {children}
    </SignInContext.Provider>
  );
}