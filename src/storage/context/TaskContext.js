import React, { createContext } from 'react';

import axios from 'axios';

const url = 'http://localhost:8080/task/';

export const TaskContext = createContext(null);

export const TaskProvider = ({children}) => {

  async function addTask(task) {
    return await axios.post(url, {
      name: task.name,
      type: task.type,
      description: task.description,
      initialDate: task.initialDate,
      finalDate:task.finalDate,
      startTime:task.startTime,
      closingTime: task.closingTime,
      workload: task.workload,
      nucle:task.nucle
    });
  }

  async function getTask(taskID) {
    return await axios.get(`${url}/${taskID}`)
    .then(function (resp) {
      return resp.data.data;
    });
  }

  async function getAllTasks() {
    return await axios.get(url)
    .then(result => {
      return result.data.data
  });
  }

  async function setTask(task) {
    return await axios.put(`${url}/${task._id}`, {
      name: task.name,
      type: task.type,
      description: task.description,
      initialDate: task.initialDate,
      finalDate:task.finalDate,
      startTime:task.startTime,
      closingTime: task.closingTime,
      workload: task.workload,
      nucle:task.nucle
    });
  }

  async function deleteTask(taskID) {
    return await axios.delete(`${url}/${taskID}`)
    .then(result => {
      return result.data.data
    });
  }

  return (
    <TaskContext.Provider value = {{addTask, getTask, getAllTasks, setTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
}