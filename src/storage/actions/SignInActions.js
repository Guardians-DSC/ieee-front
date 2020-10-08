import axios from 'axios';

const url = 'http://localhost:8080/auth';

export function _checkToken(token) {
  return new Promise((resolve, reject) => {
    axios.get(`${url}/checkToken`, {
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

/** Implementar */
// export function _register(data) {
//   return new Promise((resolve, reject) => {
//     axios.post(`${url}/register`, data)
//     .then(result => {
//       resolve(result);
//     })
//     .catch(error => {
//       reject(error);
//     })
//   });
// };
