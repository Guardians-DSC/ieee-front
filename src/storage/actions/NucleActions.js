import axios from 'axios';

const url = 'http://localhost:8080/nucle/';

export function _addNucle(nucle) {
  return new Promise((resolve, reject) => {
    axios.post(url, { name: nucle.name })
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
    axios.get(`${url}/${nucleName}`)
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
    axios.get(url)
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
    axios.put(`${url}/${nucle.name}`, {name: nucle.name})
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
    axios.delete(`${url}/${nucleName}`)
    .then(result => {
      if (result.status !== Response.error)
        resolve(result);
      else
        reject(result);
    });
  });
};
