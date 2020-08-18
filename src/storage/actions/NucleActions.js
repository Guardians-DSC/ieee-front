import axios from 'axios';

const url = 'http://localhost:8080/nucle/';

export function _addNucle(nucle) {
  return new Promise((resolve, reject) => {
    axios.post(url, 
      { name: nucle.name }, 
      { headers : {
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`
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
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`
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
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`
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
      { name: nucle.name }, 
      { headers : {
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`
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
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`
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
