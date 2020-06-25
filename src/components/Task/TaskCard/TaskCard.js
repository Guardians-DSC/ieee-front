import React from 'react';
import { useState } from 'react'
import {Card, Col, Icon} from 'antd';
import 'antd/dist/antd.css';
import TaskEditModal from './TaskEditModal';
import DeleteModal from '../../DeleteConfirm/DeleteModal'

import {cardStyle, iconStyle, metaStyle} from './TaskCardStyle'

const { Meta } = Card;

const TaskCard = ( ctask ) => {
    const task = ctask.currentask;
    const [isEditOpen, setIsEditOpen] = useState();
    const [isDeleteOpen, setIsDeleteOpen] = useState();
    const [isDownloadOpen, setIsDownloadOpen] = useState();    

    return (
        <React.Fragment>
            <Col span={4} style={{'marginBottom':'20px'}} xs={24} sm={12} md={8} lg={8} xl={4}>
                <Card
                    title={task.name}
                    cover={task.nucle}
                    hoverable={true} 
                    style={cardStyle}
                    actions={[
                        <Icon key='1' type='edit' onClick={setIsEditOpen} theme='twoTone' style={iconStyle} /> ,
                        <Icon key='2' type='copy' onClick={setIsDownloadOpen} theme='twoTone' style={iconStyle} />,
                        <Icon key='3' type='delete' onClick={setIsDeleteOpen} theme='twoTone' twoToneColor='#eb2f96' style={iconStyle} />
                    ]}
                >
                    {/* <DeleteModal show={isDeleteOpen} onClose={setIsDeleteOpen} taskId={this.props.id}/> */}
                    <DeleteModal taskId={task._id} show={isDeleteOpen} onClose={setIsDeleteOpen}/>
                    <TaskEditModal 
                        show={isEditOpen}
                        onClose={setIsEditOpen}
                        taskId={task._id}
                        title={task.name}
                        description={task.description}
                        isEdition='{this.state.isEdition}' 
                    />
                    <Meta style={metaStyle} description={`Carga Horária: ${task.workload}`}/>
                    <Meta style={metaStyle} description={`Tipo: ${task.type}`}/>
                    <Meta style={metaStyle} description={`Inicio: ${task.initialDate}`}/>
                    <Meta style={metaStyle} description={`Encerramento: ${task.finalDate}`}/>
                    {/* <Meta description={`Inicio: ${task.initialDate} - ${task.startTime}`}/>
                    <Meta description={`Encerramento: ${task.finalDate} - ${task.closingTime}`}/> */}
                    <Meta style={metaStyle} description={`Descrição: ${task.description}`}/>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default TaskCard;

/*
    openDownloadModal = () => {
        this.setState({
            isDownloadOpen: !this.state.isDownloadOpen
        })
    }
*/