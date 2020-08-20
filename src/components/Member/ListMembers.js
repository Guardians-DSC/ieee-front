import React from 'react'
import {useContext} from 'react';
import {Row} from 'antd';

import { UserContext } from '../../storage/context/UserContext';
import MemberCard from './MemberCard/MemberCard';
import Sidebar from '../Sidebar/SideBar';
import 'antd/dist/antd.css';

import style from '../../Style/Style'

const ListMembers = () => {
  const { getAllUsers } = useContext(UserContext);

  const renderCard = (users) => {
    if (users !== undefined) {
      return users.map((user,index) => <MemberCard currentUser={user} key={index} />);
    }
  }

  return (
    <div style={style.container}>
      <Sidebar/>
      <div style={style.scrollContainer}>
        <Row gutter={{xs:4, sm:16}} style={style.rowStyle}>
          {renderCard(getAllUsers().users)}
        </Row>
      </div>
    </div>
  )
}

export default ListMembers;