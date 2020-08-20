import axios from 'axios';

const url = 'http://localhost:8080/nucle/';
const token = localStorage.getItem('T0ken');

export function _addNucle(nucle) {
  return new Promise((resolve, reject) => {
    axios.post(url, 
      { name: nucle.name }, 
      { headers : {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      reject(error);
    })
  });
};

export function _getNucle(nucleName) {
  return new Promise((resolve, reject) => {
    axios.get(`${url}/${nucleName}`,{
      headers : {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      reject(error);
    })
  });
};

export function _getAllNucles() {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      headers : {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      reject(error);
    })
  });
};

export function _setNucle(nucle) {
  return new Promise((resolve, reject) => {
    axios.put(`${url}/${nucle.name}`, 
      { name: nucle.newName }, 
      { headers : {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      reject(error);
    })
  });
};

export function _deleteNucle(nucleName) {
  return new Promise((resolve, reject) => {
    axios.delete(`${url}/${nucleName}`,
      { headers : {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(result => {
      if (result.status !== Response.error)
        resolve(result);
      else
        reject(result);
    });
  });
};
