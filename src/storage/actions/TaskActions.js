import axios from 'axios';

const url = 'http://localhost:8080/task/';

export function _addTask(task) {
  return new Promise((resolve, reject) => {
    axios.post(url, task,
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

export function _getTask(taskID) {
  return new Promise((resolve, reject) => {
    axios.get(`${url}/${taskID}`,
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

export function _getAllTasks() {
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

export function _setTask(task) {
  return new Promise((resolve, reject) => {
    axios.put(`${url}/${task._id}`, task,
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

export function _deleteTask(taskID) {
  return new Promise((resolve, reject) => {
    axios.delete(`${url}/${taskID}`,
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
