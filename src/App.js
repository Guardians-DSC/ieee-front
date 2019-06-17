import React, { Component } from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import SideBar from './components/Sider/SideBar'
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App" style={{display:'flex', position:'fixed', height:'100vh', left:0}}>
                <SideBar content={<Dashboard showType={this.props.showType}/>}/>
            </div>
          );
    }
}