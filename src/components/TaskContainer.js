import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SimpleContainer from './SimpleContainer'
import SingleLineGridList from './TaskGrid'

class TaskContainer extends Component{

  render(){

    return(
      <div>
        <SimpleContainer>

        </SimpleContainer>
      </div>
    );
  }
}

export default TaskContainer;