import React from 'react'
import 'antd/dist/antd.css';
import {Row} from 'antd';
import TaskCard from '../Task/TaskCard/TaskCard';
import Sidebar from '../Sider/SideBar';
import axios from 'axios';
import {useState, useEffect} from 'react';

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
      height:'95vh',
      overflowY:'auto'
    }

    const taska = {
        name:"asd",
        description:"Amanhã",
        id:1
    }

    return (
        <div style={{display:'flex',height:'100vh'}}>
            <Sidebar/>
            <div style={{ background: '#ECECEC', padding: '1rem', width:'100vw'}}>
                <Row gutter={{xs:4, sm:16}} style={rowStyle}>
                    {renderCard(taska, tasks)}
                </Row>
            </div>
        </div>
    )
}

export default Dashboard;