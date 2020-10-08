import axios from 'axios';

const url = 'http://localhost:8080/user';

export function _addUser(user) {
  return new Promise((resolve, reject) => {
    axios.post(url, user,
      { headers : {
        'Authorization': `Bearer ${localStorage.getItem('T0ken')}`
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

export function _getUser(userID) {
  return new Promise((resolve, reject) => {
    axios.get(`${url}/${userID}`,
      { headers : {
        'Authorization': `Bearer ${localStorage.getItem('T0ken')}`
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

export function _getAllUsers() {
  return new Promise((resolve, reject) => {
    axios.get(url,
      { headers : {
        'Authorization': `Bearer ${localStorage.getItem('T0ken')}`
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

export function _setUser(user) {
  return new Promise((resolve, reject) => {
    axios.put(`${url}/${user.email}`, user,
      { headers : {
        'Authorization': `Bearer ${localStorage.getItem('T0ken')}`
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

export function _deleteUser(userID) {
  return new Promise((resolve, reject) => {
    axios.delete(`${url}/${userID}`,
      { headers : {
        'Authorization': `Bearer ${localStorage.getItem('T0ken')}`
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
