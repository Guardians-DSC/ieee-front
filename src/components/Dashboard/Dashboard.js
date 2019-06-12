import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {Row} from 'antd';
import Task from '../Task/Task';

const tasks = [
    {
        'title': 'Atividade 0',
        'description': 'Descrição da Atividade 0',
        'key': '0'
    },

    {
        'title': 'Atividade 1',
        'description': 'Descrição da Atividade 1',
        'key': '1'
    },

    {
        'title': 'Atividade 2',
        'description': 'Descrição da Atividade 2',
        'key': '2'
    },

    {
        'title': 'Atividade 3',
        'description': 'Descrição da Atividade 3',
        'key': '3'
    },

    {
        'title': 'Atividade 4',
        'description': 'Descrição da Atividade 4',
        'key': '4'
    },

    {
        'title': 'Atividade 5',
        'description': 'Descrição da Atividade 5',
        'key': '5'
    },

    {
        'title': 'Atividade 6',
        'description': 'Descrição da Atividade 6',
        'key': '6'
    },
];

const tasksList = tasks.map((task) => 
    <Task
        title = {task.title}
        description = {task.description}
        key = {task.key}
    />
)

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            tasks: tasks
        }
    }

    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }} >
                <Row gutter={16} >
                    {tasksList}
                </Row>
            </div>
        )
    }
}
