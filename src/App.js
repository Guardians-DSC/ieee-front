import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar'
import MainBar from './components/AppBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TaskContainer from './components/TaskContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainBar name="IEEE Task Manager 1.0"/>
          <BrowserRouter>
            <Switch>
              <Route path="/tasks" component={TaskContainer}/>
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
