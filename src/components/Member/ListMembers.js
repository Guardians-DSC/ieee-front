import React from 'react'
import {Row} from 'antd';

import { useUserDataContext } from '../../storage/context/UserContext';

import MemberCard from './MemberCard/MemberCard';
import Sidebar from '../Sidebar/SideBar';
import 'antd/dist/antd.css';

import style from '../../Style/Style'

const ListMembers = () => {
  const { getAllUsers, users } = useUserDataContext();

  const renderCard = (users) => {
    getAllUsers();
    if (users !== undefined) {
      return users.map((user,index) => <MemberCard currentUser={user} key={index} />);
    }
  }

  return (
    <div style={style.container}>
      <Sidebar/>
      <div style={style.scrollContainer}>
        <Row gutter={{xs:4, sm:16}} style={style.rowStyle}>
          {renderCard(users)}
        </Row>
      </div>
    </div>
  )
}

export default ListMembers;