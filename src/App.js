import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar'
import MainBar from './components/AppBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainBar name="IEEE Task Manager 1.0"/>
        </header>
      </div>
    );
  }
}

export default App;
