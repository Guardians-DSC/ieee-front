import React from 'react'
import {useState, useEffect, useContext} from 'react';
import {Row} from 'antd';
//import 'antd/dist/antd.css';

import { TaskContext } from '../../storage/context/TaskContext';
import TaskCard from '../Task/TaskCard/TaskCard';
import Sidebar from '../Sidebar/SideBar';
import 'antd/dist/antd.css';

import style from './DashboardStyle'

const Dashboard = () => {
  const { getAllTasks } = useContext(TaskContext);
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchTasks = await getAllTasks();
      setTasks(fetchTasks);
      renderCard(fetchTasks);
    }
    fetchData();
  }, [tasks, getAllTasks]);

  const renderCard = (tasks) => {
    if (tasks !== undefined) {
      return tasks.map((task,index) => <TaskCard currentask={task} key={index} />);
    }
  }

  return (
    <div style={style.container}>
      <Sidebar/>
      <div style={style.scrollContainer}>
        <Row gutter={{xs:4, sm:16}} style={style.rowStyle}>
          {renderCard(tasks)}
        </Row>
      </div>
    </div>
  )
}

export default Dashboard;