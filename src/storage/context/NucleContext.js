import React, { createContext, useState, useContext } from 'react';
import {_addNucle, _getNucle, _getAllNucles, _setNucle, _deleteNucle} from '../actions/NucleActions'

export const NucleContext = createContext(null);
export const useNucleDataContext = () => useContext(NucleContext);

const initialState = {
  nucles: [],     //All nucles
  cNucle: null,   //Current Nucle
};

const NucleProvider = ({children}) => {
  const [nucleState, setNucleState] = useState(initialState);

  function addNucle(nucle) {
    _addNucle(nucle)
    .then(result => {
      setNucleState({ ...nucleState, cNucle: result.data.data});
    })
    .catch(error => {
      setNucleState(initialState);
      console.log(error);
    });
  }

  function getNucle(nucleName) {
    _getNucle(nucleName)
    .then(result => {
      setNucleState({ ...nucleState, cNucle: result.data.data });
    })
    .catch(error => {
      setNucleState(initialState);
      console.log(error);
    });
  }

  function getAllNucles() {
    _getAllNucles()
    .then(result => {
      setNucleState({ ...nucleState, nucles: result.data.data });
    })
    .catch(error => {
      setNucleState(initialState);
      console.log(error);
    });
  }

  function setNucle(nucle) {
    _setNucle(nucle)
    .then(result => {
      setNucleState({ ...nucleState, cNucle: result.data.data });
    })
    .catch(error => {
      setNucleState(initialState);
      console.log(error);
    });
  }

  function deleteNucle(nucleName) {
    _deleteNucle(nucleName)
    .then(() => {
      _getAllNucles().then(result => setNucleState({ ...nucleState, nucles: result.data.data}));
    })
    .catch(error => {
      setNucleState(initialState);
      console.log(error);
    });
  }

  const nucleStateData = ({...nucleState, addNucle, getNucle, getAllNucles, setNucle, deleteNucle}); 

  return (
    <NucleContext.Provider value = {nucleStateData}>
      {children}
    </NucleContext.Provider>
  );
}

export default NucleProvider;