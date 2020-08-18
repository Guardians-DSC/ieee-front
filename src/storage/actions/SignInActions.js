import axios from 'axios';

const url = 'http://localhost:8080/auth';

export function _logIn(data) {
  return new Promise((resolve, reject) => {
    axios.post(`${url}/login`, data)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      reject(error);
    })
  });
};

export function _register(data) {
  return new Promise((resolve, reject) => {
    axios.post(`${url}/register`, data)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      reject(error);
    })
  });
};
