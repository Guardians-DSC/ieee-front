import React from 'react';
import { useState } from 'react'
import {Card, Col, Icon} from 'antd';
import 'antd/dist/antd.css';
import PopupEdit from './TaskPopupEdit/PopupEdit';
import PopupDelete from './TaskPopupDelete/PopupDelete';

import style from './TaskCardStyle'

const { Meta } = Card;

const TaskCard = ( ctask ) => {
  const task = ctask.currentask;
  const [openPopupEdit, setOpenEditPopup] = useState(false);
  const [openPopupDelete, setOpenPopupDelete] = useState(false);

  return (
    <React.Fragment>
      <Col span={4} style={{'marginBottom':'20px'}} xs={24} sm={12} md={8} lg={8} xl={4}>
        <Card
          title={task.name}
          cover={task.nucle}
          style={style.cardStyle}
          hoverable={true} 
          actions={[
            <Icon key='1' type='edit'   onClick={() => setOpenEditPopup(!openPopupEdit)} theme='twoTone' style={style.iconStyle} /> ,
            <Icon key='2' type='copy'   onClick={() => setOpenPopupDelete(!openPopupDelete)} theme='twoTone' style={style.iconStyle} />,
            <Icon key='3' type='delete' onClick={() => setOpenPopupDelete(!openPopupDelete)} theme='twoTone' twoToneColor='#eb2f96' style={style.iconStyle} />
          ]}
        >
          <Meta style={style.metaStyle} description={`Carga Horária: ${task.workload}`}/>
          <Meta style={style.metaStyle} description={`Tipo: ${task.type}`}/>
          <Meta style={style.metaStyle} description={`Inicio: ${task.initialDate}`}/>
          <Meta style={style.metaStyle} description={`Encerramento: ${task.finalDate}`}/>
          <Meta style={style.metaStyle} description={`Descrição: ${task.description}`}/>
          {/* <Meta description={`Inicio: ${task.initialDate} - ${task.startTime}`}/> */}
          {/* <Meta description={`Encerramento: ${task.finalDate} - ${task.closingTime}`}/> */}

          <PopupEdit task={task} openPopup={openPopupEdit} onClose={() => setOpenEditPopup(!openPopupEdit)}/>
          <PopupDelete task={task} openPopup={openPopupDelete} onClose={() => setOpenPopupDelete(!openPopupDelete)}/>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default TaskCard;