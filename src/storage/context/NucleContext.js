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
      setNucleState({ nucles: [], cNucle: null });
    });
  }

  function getNucle(nucleName) {
    _getNucle(nucleName)
    .then(result => {
      setNucleState({ ...nucleState, cNucle: result.data.data });
    })
    .catch(error => {
      setNucleState({ nucles: [], cNucle: null });
    });
  }

  function getAllNucles() {
    _getAllNucles()
    .then(result => {
      setNucleState({ ...nucleState, nucles: result.data.data });
    })
    .catch(error => {
      setNucleState({ nucles: [], cNucle: null });
    });
  }

  function setNucle(nucle) {
    _setNucle(nucle)
    .then(result => {
      setNucleState({ ...nucleState, cNucle: result.data.data });
    })
    .catch(error => {
      setNucleState({ nucles: [], cNucle: null});
    });
  }

  function deleteNucle(nucleName) {
    _deleteNucle(nucleName)
    .then(result => {
      _getAllNucles().then(r => setNucleState({ ...nucleState, nucles: r.data.data}));
      setNucleState({ ...nucleState, cNucle: result.data.data });
    })
    .catch(error => {
      setNucleState({ nucles: [], cNucle: null });
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