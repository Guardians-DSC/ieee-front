import React, { createContext, useState, useContext } from 'react';

import {_addTask, _getTask, _getAllTasks, _setTask, _deleteTask} from '../actions/TaskActions'

export const TaskContext = createContext(null);
export const useTaskDataContext = () => useContext(TaskContext);

const initialState = {
  tasks: [],      //All tasks
  cTask: null,    //Current task
};

const TaskProvider = ({children}) => {
  const [taskState, setTaskState] = useState(initialState);

  function addTask(task) {
    _addTask(task)
    .then(result => {
      setTaskState({ ...taskState, cTask: result.data.data });
    })
    .catch(error => {
      setTaskState(initialState);
      console.log(error);
    });
  }

  function getTask(taskID) {
    _getTask(taskID)
    .then(result => {
      setTaskState({ ...taskState, cTask: result.data.data });
    })
    .catch(error => {
      setTaskState(initialState);
      console.log(error);
    });
  }

  function getAllTasks() {
    _getAllTasks()
    .then(result => {
      setTaskState({ ...taskState, tasks: result.data.data });
    })
    .catch(error => {
      setTaskState(initialState);
      console.log(error);
    });
  }

  function setTask(task) {
    _setTask(task)
    .then(result => {
      setTaskState({ ...taskState, cTask: result.data.data });
    })
    .catch(error => {
      setTaskState(initialState);
      console.log(error);
    });
  }

  function deleteTask(taskID) {
    _deleteTask(taskID)
    .then(() => {
      _getAllTasks().then(result => setTaskState({ ...initialState, tasks: result.data.data}));
    })
    .catch(error => {
      setTaskState(initialState);
      console.log(error);
    });
  }

  const taskStateData = ({...taskState, addTask, getTask, getAllTasks, setTask, deleteTask}); 

  return (
    <TaskContext.Provider value = {taskStateData}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;