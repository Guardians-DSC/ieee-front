import React, { createContext, useState, useContext } from 'react';

import {_addUser, _getUser, _getAllUsers, _setUser, _deleteUser} from '../actions/UserActions'

export const UserContext = createContext(null);
export const useUserDataContext = () => useContext(UserContext);

const initialState = {
  users: [],        //All users
  cUser: null,      //Current user
};

const UserProvider = ({children}) => {
  const [userState, setUserState] = useState(initialState);

  function addUser(user) {
    _addUser(user)
    .then(result => {
      setUserState({ ...userState, cUser: result.data.data });
    })
    .catch(error => {
      setUserState(initialState);
      console.log(error);
    });
  }

  function getUser(userID) {
    _getUser(userID)
    .then(result => {
      setUserState({ ...userState, cUser: result.data.data });
    })
    .catch(error => {
      setUserState(initialState);
      console.log(error);
    });
  }

  function getAllUsers() {
    _getAllUsers()
    .then(result => {
      setUserState({ ...userState, users: result.data.data });
    })
    .catch(error => {
      setUserState(initialState);
      console.log(error);
    });
  }

  function setUser(user) {
    _setUser(user)
    .then(result => {
      setUserState({ ...userState, cUser: result.data.data });
    })
    .catch(error => {
      setUserState(initialState);
      console.log(error);
    });
  }

  function deleteUser(userID) {
    _deleteUser(userID)
    .then(() => {
      _getAllUsers().then(result => setUserState({ ...initialState, users: result.data.data }));
    })
    .catch(error => {
      setUserState(initialState);
      console.log(error);
    });
  }

  const userStateData = ({...userState, addUser, getUser, getAllUsers, setUser, deleteUser}); 

  return (
    <UserContext.Provider value = {userStateData}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;