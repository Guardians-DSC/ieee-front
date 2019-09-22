import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {Row} from 'antd';
import TaskCard from '../Task/TaskCard/TaskCard';
import {TaskContext} from '../../mock/task-context';
import axios from 'axios';
import {useState, useEffect} from 'react'


const Dashboard = () => {
    const [tasks, setTasks] = useState();
    const [url, setUrl] = useState('http://localhost:8080/task');

    useEffect(() => {
        const fetchData = async () => {
            const fetchTasks = await getAllTasks()
            setTasks(fetchTasks);
            renderCard(taska, fetchTasks)
        }
        fetchData()
    }, []);

    const getAllTasks = async () => {
        return await axios(url)
                        .then(result => {
                            return result.data.data
                        })
    }

    const renderCard = (task, tasks) => {
        if (tasks !== undefined) {
            return (
                tasks.map((task,index) => (
                    <TaskCard
                        title={task.name}
                        description={task.description}
                        id={task._id}
                        key={index}
                    />
                )
                ) 
            )
        }
        return (
            <TaskCard
                title={task.name}
                description={task.description}
                id={task.id}
                key={1}
            />
        )
    }
    
   
   const rowStyle = {
      flexBasis:'50%',
      height:'100vh',
      overflowY:'auto'
    }

    const taska = {
        name:"asd",
        description:"aaaaaaaaaaaaamanhã",
        id:1
    }

    return (
        <div style={{ background: '#ECECEC', padding: '1rem', width:'100vw'}}>
            <Row gutter={{xs:4, sm:16}} style={rowStyle}>
                {renderCard(taska, tasks)}
            </Row>
        </div>
    )
}

export default Dashboard;