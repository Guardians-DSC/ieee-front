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
    {
        'title': 'Atividade 7',
        'description': 'Descrição da Atividade 7',
        'key': '7'
    },

    {
        'title': 'Atividade 8',
        'description': 'Descrição da Atividade 8',
        'key': '8'
    },

    {
        'title': 'Atividade 9',
        'description': 'Descrição da Atividade 9',
        'key': '9'
    },

    {
        'title': 'Atividade 10',
        'description': 'Descrição da Atividade 10',
        'key': '10'
    },
    {
        'title': 'Atividade 11',
        'description': 'Descrição da Atividade 11',
        'key': '11'
    },

    {
        'title': 'Atividade 12',
        'description': 'Descrição da Atividade 12',
        'key': '12'
    },

    {
        'title': 'Atividade 13',
        'description': 'Descrição da Atividade 13',
        'key': '13'
    },

    {
        'title': 'Atividade 14',
        'description': 'Descrição da Atividade 14',
        'key': '14'
    },
    {
        'title': 'Atividade 15',
        'description': 'Descrição da Atividade 15',
        'key': '15'
    },

    {
        'title': 'Atividade 16',
        'description': 'Descrição da Atividade 16',
        'key': '16'
    },

    {
        'title': 'Atividade 17',
        'description': 'Descrição da Atividade 17',
        'key': '17'
    },

    {
        'title': 'Atividade 18',
        'description': 'Descrição da Atividade 18',
        'key': '18'
    },
    {
        'title': 'Atividade 19',
        'description': 'Descrição da Atividade 19',
        'key': '19'
    },
    {
        'title': 'Atividade 20',
        'description': 'Descrição da Atividade 20',
        'key': '20'
    },
    {
        'title': 'Atividade 21',
        'description': 'Descrição da Atividade 21',
        'key': '21'
    },
    {
        'title': 'Atividade 22',
        'description': 'Descrição da Atividade 22',
        'key': '22'
    },
    {
        'title': 'Atividade 23',
        'description': 'Descrição da Atividade 23',
        'key': '23'
    },
    {
        'title': 'Atividade 24',
        'description': 'Descrição da Atividade 24',
        'key': '24'
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
            <div style={{ background: '#ECECEC', padding: '30px', backgroundSize:'cover'}} >
                <Row gutter={{xs:4, sm:16}} style={{flexBasis:'50%'}} > 
                    {this.state.info}
                </Row>
            </div>
        )
    }
}
