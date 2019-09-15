import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {Row} from 'antd';
import TaskCard from '../Task/TaskCard/TaskCard';
import Member from '../Member/Member';


export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            tasks: this.props.tasks,
            info: null
        }
    }

    /* componentDidMount() {
        fetch('http://localhost:8080/task')
        .then(res => {
            return Promise.resolve(res.json());
        }).then(result => {
            const tasksData = result.data
            console.log(tasksData);
            const tasks = tasksData.map((task, index) => 
                <Task
                    title={task.name}
                    description={task.description}
                    id={task._id}
                    key={index}
                />
            );
            this.setState({
                info:tasks
            })
        })
    } */


    rowStyle = {
        flexBasis:'50%',
        height:'100vh',
        overflowY:'auto'
    }

    render() {
        const listedTasks = this.state.tasks.map((task) => (
            <TaskCard
                title = {task.title}
                description = {task.description}
                key = {task.key}
                id = {task.id}
            />
        ))
        return (
            <div style={{ background: '#ECECEC', padding: '1rem', width:'100vw'}} >
                <Row gutter={{xs:4, sm:16}} style={this.rowStyle}> 
                    {console.log(this.props)}
                    {listedTasks}
                </Row>
            </div>
        )
    }
}
