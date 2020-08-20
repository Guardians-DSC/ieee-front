import React, { createContext, useState } from 'react';

import {_addUser, _getUser, _getAllUsers, _setUser, _deleteUser} from '../actions/UserActions'

export const UserContext = createContext(null);

const initialState = {
  users: [],        //All users
  cUser: null,      //Current user
  response: null,   //Backend response
  token: localStorage.getItem('T0ken')
};

export const UserProvider = ({children}) => {
  const [userState, setUserState] = useState(initialState);

  function addUser(user) {
    _addUser(user)
    .then(result => {
      setUserState({ ...initialState, cUser: result.data.data, response: result.status });
    })
    .catch(error => {
      setUserState({ users: [], cUser: null, response: error });
    });

    return userState;
  }

  function getUser(userID) {
    _getUser(userID)
    .then(result => {
      setUserState({ ...initialState, cUser: result.data.data, response: result.status });
    })
    .catch(error => {
      setUserState({ users: [], cUser: null, response: error });
    });

    return userState;
  }

  function getAllUsers() {
    _getAllUsers()
    .then(result => {
      setUserState({ ...initialState, users: result.data.data, response: result.status });
    })
    .catch(error => {
      setUserState({ users: [], cUser: null, response: error });
    });

    return userState;
  }

  function setUser(user) {
    _setUser(user)
    .then(result => {
      setUserState({ ...initialState, cUser: result.data.data, response: result.status });
    })
    .catch(error => {
      setUserState({ users: [], cUser: null, response: error });
    });

    return userState;
  }

  function deleteUser(userID) {
    _deleteUser(userID)
    .then(result => {
      setUserState({ ...initialState, response: result.status}); 
      _getAllUsers().then(r => setUserState({ ...initialState, users: r.data.data}));
    })
    .catch(error => {
      setUserState({ users: [], cUser: null, response: error });
    });

    return userState;
  }

  return (
    <UserContext.Provider value = {{addUser, getUser, getAllUsers, setUser, deleteUser}}>
      {children}
    </UserContext.Provider>
  );
}