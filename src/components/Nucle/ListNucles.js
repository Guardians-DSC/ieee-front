import React from 'react'
import {useContext} from 'react';
import {Row} from 'antd';

import { NucleContext } from '../../storage/context/NucleContext';
import NucleCard from './NucleCard/NucleCard';
import Sidebar from '../Sidebar/SideBar';
import 'antd/dist/antd.css';

import style from '../../Style/Style'

const ListNucles = () => {
  const { getAllNucles } = useContext(NucleContext);

  const renderCard = (nucles) => {
    if (nucles !== undefined) {
      return nucles.map((nucle,index) => <NucleCard currentNucle={nucle} key={index} />);
    }
  }

  return (
    <div style={style.container}>
      <Sidebar/>
      <div style={style.scrollContainer}>
        <Row gutter={{xs:4, sm:16}} style={style.rowStyle}>
          {renderCard(getAllNucles().nucles)}
        </Row>
      </div>
    </div>
  )
}

export default ListNucles;