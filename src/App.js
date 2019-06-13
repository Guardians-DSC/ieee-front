import React, { Component } from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';


/* import Modal from './components/Task/TaskRegisterModal'; */

export default class App extends Component {
    render() {
        return (
            <div className="App" >
                <Dashboard showType={this.props.showType}/>
                {/* <Modal/> */}
            </div>
          );
    }
}