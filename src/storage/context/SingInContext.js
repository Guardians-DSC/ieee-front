import React, { createContext, useState, useContext } from 'react';
import {_checkToken, _logIn} from '../actions/SignInActions'

export const SignInContext = createContext(null);
export const useSignDataContext = () => useContext(SignInContext);

const SignInProvider = ({children}) => {
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

  function logIn(data) {
    _logIn(data)
    .then(result => {
      localStorage.setItem('T0ken', result.data.data.token);
      setSignInState(true);
    })
    .catch(error => {
      localStorage.setItem('T0ken', null);
      setSignInState(false);

      if(error.toString().includes('404'))
        window.alert('Usuário não cadastrado.');
      else if(error.toString().includes('400'))
        window.alert('Senha inválida.');

      console.log(error);
    });
  }

  function logOut() {
    localStorage.setItem('T0ken', null);
    setSignInState(false);
  }

  const signInStateData = ({isSignedIn: signInState, logIn, logOut, checkToken}); 

  return (
    <SignInContext.Provider value = {signInStateData}>
      {children}
    </SignInContext.Provider>
  );
}

export default SignInProvider;