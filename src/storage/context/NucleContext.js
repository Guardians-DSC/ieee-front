import React, { createContext, useState } from 'react';

import {_addNucle, _getNucle, _getAllNucles, _setNucle, _deleteNucle} from '../actions/NucleActions'

export const NucleContext = createContext(null);

const initialState = {
  nucles: [],     //All nucles
  cNucle: null,   //Current Nucle
  response: null  //Backend response
};

export const NucleProvider = ({children}) => {
  const [nucleState, setNucleState] = useState(initialState);

  function addNucle(nucle) {
    _addNucle(nucle)
    .then(result => {
      console.log(result.data.data);
      setNucleState({ response: result.status, nucles: result.data.data });
    })
    .catch(error => {
      setNucleState({ response: error, nucles: [] });
    });

    return nucleState;
  }

  function getNucle(nucleName) {
    _getNucle(nucleName)
    .then(result => {
      console.log(result.data.data);
      setNucleState({ ...initialState, response: result.status, cNucle: result.data.data });
    })
    .catch(error => {
      setNucleState({ ...initialState, response: error, cNucle: null });
    });

    return nucleState;
  }

  function getAllNucles() {
    _getAllNucles()
    .then(result => { setNucleState({ response: result.status, nucles: result.data.data });
    })
    .catch(error => {
      setNucleState({ response: error, nucles: [] });
    });

    return nucleState;
  }

  function setNucle(nucle) {
    _setNucle(nucle)
    .then(result => {
      console.log(result.data.data);
      setNucleState({ ...initialState, response: result.status, cNucle: result.data.data });
    })
    .catch(error => {
      setNucleState({ ...initialState, response: error, cNucle: null });
    });

    return nucleState;
  }

  function deleteNucle(nucleName) {
    _setNucle(nucleName)
    .then(result => {
      console.log(result.data.data);
      setNucleState({ ...initialState, response: result.status });
    })
    .catch(error => {
      setNucleState({ ...initialState, response: error });
    });

    return nucleState;  }

  return (
    <NucleContext.Provider value = {{addNucle, getNucle, getAllNucles, setNucle, deleteNucle}}>
      {children}
    </NucleContext.Provider>
  );
}