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
      setNucleState({ ...initialState, cNucle: result.data.data, response: result.status });
    })
    .catch(error => {
      setNucleState({ nucles: [], cNucle: null, response: error });
    });

    return nucleState;
  }

  function getNucle(nucleName) {
    _getNucle(nucleName)
    .then(result => {
      setNucleState({ ...initialState, cNucle: result.data.data, response: result.status });
    })
    .catch(error => {
      setNucleState({ nucles: [], cNucle: null, response: error });
    });

    return nucleState;
  }

  function getAllNucles() {
    _getAllNucles()
    .then(result => {
      setNucleState({ ...initialState, nucles: result.data.data, response: result.status });
    })
    .catch(error => {
      setNucleState({ nucles: [], cNucle: null, response: error });
    });
    
    return nucleState;
  }

  function setNucle(nucle) {
    _setNucle(nucle)
    .then(result => {
      setNucleState({ ...initialState, cNucle: result.data.data, response: result.status });
    })
    .catch(error => {
      setNucleState({ nucles: [], cNucle: null, response: error });
    });

    return nucleState;
  }

  function deleteNucle(nucleName) {
    _deleteNucle(nucleName)
    .then(result => {
      setNucleState({ ...initialState, response: result.status}); 
      _getAllNucles().then(r => setNucleState({ ...initialState, nucles: r.data.data}));
      setNucleState({ ...initialState, cNucle: result.data.data, response: result.status });
    })
    .catch(error => {
      setNucleState({ nucles: [], cNucle: null, response: error });
    });

    return nucleState;  
  }

  return (
    <NucleContext.Provider value = {{addNucle, getNucle, getAllNucles, setNucle, deleteNucle}}>
      {children}
    </NucleContext.Provider>
  );
}