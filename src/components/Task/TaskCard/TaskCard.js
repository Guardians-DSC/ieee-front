import React from 'react';
import { useState } from 'react'
import {Card, Col, Icon} from 'antd';
import 'antd/dist/antd.css';

import formatData from '../../../Utils/formatData';
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
      <Col span={4} style={{'marginBottom':'20px', 'minWidth':'33%', 'maxHeight':'80vw'}} xs={24} sm={12} md={8} lg={8} xl={4}>
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
          <Meta style={style.metaStyle} description={`Data de Início: ${formatData.fDate(task.initialDate)}`}/>
          <Meta style={style.metaStyle} description={`Data de Encerramento: ${formatData.fDate(task.finalDate)}`}/>
          <Meta style={style.metaStyle} description={`Horário de Inicio: ${formatData.fTime(task.startTime)}`}/>
          <Meta style={style.metaStyle} description={`Horário de Encerramento: ${formatData.fTime(task.closingTime)}`}/>
          <Meta style={style.metaStyle} description={`Descrição: ${task.description}`}/>

          <PopupEdit task={task} openPopup={openPopupEdit} onClose={() => setOpenEditPopup(!openPopupEdit)}/>
          <PopupDelete task={task} openPopup={openPopupDelete} onClose={() => setOpenPopupDelete(!openPopupDelete)}/>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default TaskCard;