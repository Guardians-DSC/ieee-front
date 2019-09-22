import React, { Component } from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import SideBar from './components/Sider/SideBar'
import './App.css';


import {TaskContext, info} from './mock/task-context';

const lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit,' +
            ' maecenas faucibus erat eleifend sapien ultrices aliquam,' +
            ' proin dictumst sociis vehicula natoque nisl.';

const ipsum = 'Praesent tempus aptent rhoncus vitae quis ultrices aliquam porta,' +
            ' varius taciti justo sociis nullam nulla eu pulvinar,' +
            ' leo molestie scelerisque malesuada hac lobortis vel.' +
            ' Cum elementum cras hac ac maecenas habitasse nostra,' +
            ' pharetra morbi egestas dui lacus neque magna sem, curabitur congue odio et primis ultrices.'


const tasks = [
    {
        'title': 'Atividade 0',
        'description': lorem,
        'key': 0
    },

    {
        'title': 'Atividade 1',
        'description': ipsum,
        'key': 1
    },

    {
        'title': 'Atividade 2',
        'description': lorem + ipsum,
        'key': 2
    },

    {
        'title': 'Atividade 3',
        'description': 'Descrição da Atividade 3',
        'key': 3
    },

    {
        'title': 'Atividade 4',
        'description': 'Descrição da Atividade 4',
        'key': 4
    },

    {
        'title': 'Atividade 5',
        'description': 'Descrição da Atividade 5',
        'key': 5
    },

    {
        'title': 'Atividade 6',
        'description': 'Descrição da Atividade 6',
        'key': 6
    },
    {
        'title': 'Atividade 7',
        'description': 'Descrição da Atividade 7',
        'key': 7
    },

    {
        'title': 'Atividade 8',
        'description': 'Descrição da Atividade 8',
        'key': 8
    },

    {
        'title': 'Atividade 9',
        'description': 'Descrição da Atividade 9',
        'key': 9
    },

    {
        'title': 'Atividade 10',
        'description': 'Descrição da Atividade 10',
        'key': 10
    },
    {
        'title': 'Atividade 11',
        'description': 'Descrição da Atividade 11',
        'key': 11
    },

    {
        'title': 'Atividade 12',
        'description': 'Descrição da Atividade 12',
        'key': 12
    },

    {
        'title': 'Atividade 13',
        'description': 'Descrição da Atividade 13',
        'key': 13
    },

    {
        'title': 'Atividade 14',
        'description': 'Descrição da Atividade 14',
        'key': 14
    },
    {
        'title': 'Atividade 15',
        'description': 'Descrição da Atividade 15',
        'key': 15
    },

    {
        'title': 'Atividade 16',
        'description': 'Descrição da Atividade 16',
        'key': 16
    },

    {
        'title': 'Atividade 17',
        'description': 'Descrição da Atividade 17',
        'key': 17
    },

    {
        'title': 'Atividade 18',
        'description': 'Descrição da Atividade 18',
        'key': 18
    },
    {
        'title': 'Atividade 19',
        'description': 'Descrição da Atividade 19',
        'key': 19
    },
    {
        'title': 'Atividade 20',
        'description': 'Descrição da Atividade 20',
        'key': 20
    },
    {
        'title': 'Atividade 21',
        'description': 'Descrição da Atividade 21',
        'key': 21
    },
    {
        'title': 'Atividade 22',
        'description': 'Descrição da Atividade 22',
        'key': 22
    },
    {
        'title': 'Atividade 23',
        'description': 'Descrição da Atividade 23',
        'key': 23
    },
    {
        'title': 'Atividade 24',
        'description': 'Descrição da Atividade 24',
        'key': 24
    },
];

const members = [
    {
        'name': 'Membro 0',
        'description': 'Informações do Membro 0',
        'key': '0',
        'id': '0'
    },

    {
        'name': 'Membro 1',
        'description': 'Informações do Membro 1',
        'key': '1',
        'id': '1'
    },

    {
        'name': 'Membro 2',
        'description': 'Informações do Membro 2',
        'key': '2',
        'id': '2'
    },

    {
        'name': 'Membro 3',
        'description': 'Informações do Membro 3',
        'key': '3',
        'id': '3'
    },

    {
        'name': 'Membro 4',
        'description': 'Informações do Membro 4',
        'key': '4',
        'id': '4'
    },

    {
        'name': 'Membro 5',
        'description': 'Informações do Membro 5',
        'key': '5',
        'id': '5'
    },

    {
        'name': 'Membro 6',
        'description': 'Informações do Membro 6',
        'key': '6',
        'id': '6'
    },
];

export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tasks : tasks
        }
    }

    addTask(values) {
        const newTask = {
            'title': values.name,
            'description' : values.description,
            'key' : tasks.length
        }
        tasks.push(newTask)
        this.setState({
            tasks: tasks
        })
    }
    
    render() {
        return (
            <div className="App" style={{display:'flex', position:'fixed', height:'100vh', width:'100vw'}}>
                <SideBar addTask={this.addTask}/>
                <Dashboard showType={this.props.showType} tasks={this.state.tasks} />
            </div>
          );
    }
}