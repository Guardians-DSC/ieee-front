import React from 'react'
import {useContext} from 'react';
import {Row} from 'antd';

import { TaskContext } from '../../storage/context/TaskContext';
import TaskCard from '../Task/TaskCard/TaskCard';
import Sidebar from '../Sidebar/SideBar';
import 'antd/dist/antd.css';

import style from '../../Style/Style'

const Dashboard = () => {
  const { getAllTasks } = useContext(TaskContext);

  const renderCard = (tasks) => {
    if (tasks !== undefined) 
      return tasks.map((task,index) => <TaskCard currentask={task} key={index} />);
  }

  return (
    <div style={style.container}>
      <Sidebar/>
      <div style={style.scrollContainer}>
        <Row gutter={{xs:4, sm:16}} style={style.rowStyle}>
          {renderCard(getAllTasks().tasks)}
        </Row>
      </div>
    </div>
  )
}

export default Dashboard;