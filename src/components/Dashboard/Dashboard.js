import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {Row} from 'antd';
import Task from '../Task/Task';
import Member from '../Member/Member';

import TaskRegister from '../Task/TaskRegister';

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

const members = [
    {
        'name': 'Membro 0',
        'description': 'Informações do Membro 0',
        'key': '0'
    },

    {
        'name': 'Membro 1',
        'description': 'Informações do Membro 1',
        'key': '1'
    },

    {
        'name': 'Membro 2',
        'description': 'Informações do Membro 2',
        'key': '2'
    },

    {
        'name': 'Membro 3',
        'description': 'Informações do Membro 3',
        'key': '3'
    },

    {
        'name': 'Membro 4',
        'description': 'Informações do Membro 4',
        'key': '4'
    },

    {
        'name': 'Membro 5',
        'description': 'Informações do Membro 5',
        'key': '5'
    },

    {
        'name': 'Membro 6',
        'description': 'Informações do Membro 6',
        'key': '6'
    },
];

const membersList = members.map((member) => 
    <Member
        title = {member.name}
        description = {member.description}
        key = {member.key}

    />
)

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
            tasks: tasks,
            info: null
        }
    }

    componentWillMount() {
        this.props.showType === 'task' ? this.state.info = tasksList : this.state.info = membersList;
    }

    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px'}} >
                <Row gutter={{xs:8, sm:12}} style={{flexBasis:'50%'}} >
                    {this.state.info}
                </Row>
            </div>
        )
    }
}
