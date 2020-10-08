import React from 'react'
import {Row} from 'antd';

import { useTaskDataContext } from '../../storage/context/TaskContext';

import TaskCard from '../Task/TaskCard/TaskCard';
import Sidebar from '../Sidebar/SideBar';
import 'antd/dist/antd.css';

import style from '../../Style/Style'

const Dashboard = () => {
  const { getAllTasks, tasks } = useTaskDataContext();

  const renderCard = (tasks) => {
    getAllTasks();
    if (tasks !== undefined) 
      return tasks.map((task,index) => <TaskCard currentask={task} key={index} />);
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