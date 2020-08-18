import React, { createContext, useState } from 'react';

import {_addTask, _getTask, _getAllTasks, _setTask, _deleteTask} from '../actions/TaskActions'

export const TaskContext = createContext(null);

const initialState = {
  tasks: [],      //All tasks
  cTask: null,    //Current task
  response: null  //Backend response
};

export const TaskProvider = ({children}) => {
  const [taskState, setTaskState] = useState(initialState);

  function addTask(task) {
    _addTask(task)
    .then(result => {
      setTaskState({ ...initialState, cTask: result.data.data, response: result.status });
    })
    .catch(error => {
      setTaskState({ tasks: [], cTask: null, response: error });
    });

    return taskState;
  }

  function getTask(taskID) {
    _getTask(taskID)
    .then(result => {
      setTaskState({ ...initialState, cTask: result.data.data, response: result.status });
    })
    .catch(error => {
      setTaskState({ tasks: [], cTask: null, response: error });
    });

    return taskState;
  }

  function getAllTasks() {
    _getAllTasks()
    .then(result => {
      setTaskState({ ...initialState, tasks: result.data.data, response: result.status });
    })
    .catch(error => {
      setTaskState({ tasks: [], cTask: null, response: error });
    });

    return taskState;
  }

  function setTask(task) {
    _setTask(task)
    .then(result => {
      setTaskState({ ...initialState, cTask: result.data.data, response: result.status });
    })
    .catch(error => {
      setTaskState({ tasks: [], cTask: null, response: error });
    });

    return taskState;
  }

  function deleteTask(taskID) {
    _deleteTask(taskID)
    .then(result => {
      setTaskState({ ...initialState, response: result.status}); 
      _getAllTasks().then(r => setTaskState({ ...initialState, tasks: r.data.data}));
    })
    .catch(error => {
      setTaskState({ tasks: [], cTask: null, response: error });
    });

    return taskState;
  }

  return (
    <TaskContext.Provider value = {{addTask, getTask, getAllTasks, setTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
}