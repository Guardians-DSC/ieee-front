import React from 'react';
import { useState } from 'react'
import {Card, Col, Icon} from 'antd';
import 'antd/dist/antd.css';

import PopupEdit from './NuclePopUpEdit/PopupEdit';
import PopupDelete from './NuclePopUpDelete/PopupDelete';

import style from '../../../Style/Style'

const { Meta } = Card;

const NucleCard = ( cNucle ) => {
  const nucle = cNucle.currentNucle;
  const [openPopupEdit, setOpenEditPopup] = useState(false);
  const [openPopupDelete, setOpenPopupDelete] = useState(false);

  return (
    <React.Fragment>
      <Col span={4} style={{'marginBottom':'20px', 'minWidth':'33%', 'maxHeight':'80vw'}} xs={24} sm={12} md={8} lg={8} xl={4}>
        <Card 
        title={nucle.name} 
        style={style.cardStyle}
        hoverable={true}
        actions={[
          <Icon key='1' type='edit'   onClick={() => setOpenEditPopup(!openPopupEdit)} theme='twoTone' style={style.iconStyle} /> ,
          <Icon key='2' type='copy'   onClick={() => setOpenPopupDelete(!openPopupDelete)} theme='twoTone' style={style.iconStyle} />,
          <Icon key='3' type='delete' onClick={() => setOpenPopupDelete(!openPopupDelete)} theme='twoTone' twoToneColor='#eb2f96' style={style.iconStyle} />
        ]}>
          <Meta style={style.metaStyle} description={`(Quais informações colocar?)`}/>

          <PopupEdit nucle={nucle} openPopup={openPopupEdit} onClose={() => setOpenEditPopup(!openPopupEdit)}/>
          <PopupDelete nucle={nucle} openPopup={openPopupDelete} onClose={() => setOpenPopupDelete(!openPopupDelete)}/>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default NucleCard;