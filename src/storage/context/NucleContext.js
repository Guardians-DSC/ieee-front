import React, { createContext } from 'react';

import axios from 'axios';

const url = 'http://localhost:8080/nucle/';

export const NucleContext = createContext(null);

export const NucleProvider = ({children}) => {

  async function addNucle(nucle) {
    return await axios.post(url, {
      name: nucle.name
    });
  }

  async function getNucle(nucleName) {
    return await axios.get(`${url}/${nucleName}`)
    .then(function (resp) {
      return resp.data.data;
    });
  }

  async function getAllNucles() {
    return await axios.get(url)
    .then(result => {
      return result.data.data
  });
  }

  async function setNucle(nucle) {
    return await axios.put(`${url}/${nucle.name}`, {
      name: nucle.name,
    });
  }

  async function deleteNucle(nucleName) {
    return await axios.delete(`${url}/${nucleName}`)
    .then(result => {
      return result.data.data
    });
  }

  return (
    <NucleContext.Provider value = {{addNucle, getNucle, getAllNucles, setNucle, deleteNucle}}>
      {children}
    </NucleContext.Provider>
  );
}