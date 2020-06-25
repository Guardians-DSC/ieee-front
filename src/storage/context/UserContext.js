import React, { createContext } from 'react';

import axios from 'axios';

const url = 'http://localhost:8080/user/';

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

  async function addUser(user) {
    return await axios.post(url, {
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      department: user.department,
    });
  }

  async function getUser(userEmail) {
    return await axios.get(`${url}/${userEmail}`)
    .then(function (resp) {
      return resp.data.data;
    });
  }

  async function getAllUsers() {
    return await axios.get(url)
    .then(result => {
      return result.data.data
  });
  }

  async function setUser(user) {
    return await axios.put(`${url}/${user.email}`, {
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      department: user.department
    });
  }

  async function deleteUser(userEmail) {
    return await axios.delete(`${url}/${userEmail}`)
    .then(result => {
      return result.data.data
    });
  }

  return (
    <UserContext.Provider value = {{addUser, getUser, getAllUsers, setUser, deleteUser}}>
      {children}
    </UserContext.Provider>
  );
}