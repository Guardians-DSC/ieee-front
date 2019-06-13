import React, { Component } from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

import SideBar from './components/Sider/SideBar'

/* import Modal from './components/Task/TaskRegisterModal'; */

export default class App extends Component {
    render() {
        return (
            <div className="App" style={{display:'flex', width:'auto'}}>
                <SideBar/>
                <Dashboard showType={this.props.showType}/>
                {/* <Modal/> */}
            </div>
          );
    }
}