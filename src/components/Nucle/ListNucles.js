import React from 'react'
import {Row} from 'antd';

import { useNucleDataContext } from '../../storage/context/NucleContext';

import NucleCard from './NucleCard/NucleCard';
import Sidebar from '../Sidebar/SideBar';
import 'antd/dist/antd.css';

import style from '../../Style/Style'

const ListNucles = () => {
  const { getAllNucles, nucles } = useNucleDataContext();

  const renderCard = (nucles) => {
    getAllNucles();
    if (nucles !== undefined) {
      return nucles.map((nucle,index) => <NucleCard currentNucle={nucle} key={index} />);
    }
  }

  return (
    <div style={style.container}>
      <Sidebar/>
      <div style={style.scrollContainer}>
        <Row gutter={{xs:4, sm:16}} style={style.rowStyle}>
          {renderCard(nucles)}
        </Row>
      </div>
    </div>
  )
}

export default ListNucles;