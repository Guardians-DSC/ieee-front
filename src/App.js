
import React, { Component } from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App" >
                <Dashboard showType={this.props.showType}/>
            </div>
          );
    }
}