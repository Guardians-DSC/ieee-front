import React, { Component } from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import SideBar from './components/Sider/SideBar'
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App" style={{overflowY: 'auto', display:'flex', position:'fixed', height:'100vh', left:0}}>
                <SideBar/>
                <Dashboard showType={this.props.showType}/>
            </div>
          );
    }
}