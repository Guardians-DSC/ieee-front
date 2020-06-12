import React, { Component } from 'react'
import {Card, Col, Icon} from 'antd';
import 'antd/dist/antd.css';
import './taskCard.css';
import TaskEditModal from '../TaskEditModal';
import DeleteModal from '../../DeleteConfirm/DeleteModal'
import Grid from 'antd/lib/card/Grid';

import {useState, useEffect} from 'react';

const { Meta } = Card;

const TaskCard = () => {
    const [isEditOpen, setIsEditOpen] = useState();
    const [isDeleteOpen, setIsDeleteOpen] = useState();
    const [isDownloadOpen, setIsDownloadOpen] = useState();

    const cardStyle = {
        textAlign: 'center',
    }

    const metaStyle = {
        height: '10rem',
        overflowY:'auto',
        textOverflow:'clip',
        textAlign: 'start'
    }

    const iconStyle = {
        width:'100%'
    }
    
    return (
        <React.Fragment>
            <Col span={4} style={{'marginBottom':'20px'}} xs={24} sm={12} md={8} lg={8} xl={4}>
                <Card
                    title={'TITULO MUdAR'}
                    cover={'NUCLEO'}
                    hoverable={true}
                    actions={[
                        <Icon
                            key='1' 
                            type='edit'
                            onClick={setIsEditOpen}
                            theme='twoTone'
                            style={iconStyle}
                        /> ,
                        <Icon
                            key='2'
                            type='copy'
                            onClick={setIsDownloadOpen}
                            theme='twoTone'
                            style={iconStyle}
                        />,
                        <Icon
                            key='3'
                            type='delete'
                            onClick={setIsDeleteOpen}
                            theme='twoTone'
                            twoToneColor='#eb2f96'
                            style={iconStyle}
                        />
                    ]}
                    style={cardStyle}
                >
                    {/* <DeleteModal show={isDeleteOpen} onClose={setIsDeleteOpen} taskId={this.props.id}/> */}
                    <DeleteModal show={isDeleteOpen} onClose={setIsDeleteOpen}/>
                    <TaskEditModal 
                        show={isEditOpen}
                        onClose={setIsEditOpen}
                        id='{this.props.id}'
                        title='{this.props.name}'
                        description='{this.props.description}'
                        isEdition='{this.state.isEdition}' 
                    />
                    <Meta description='{`Carga Horária: ${this.props.workload}`}'/>
                    <Meta description='{`Tipo: ${this.props.type}`}'/>
                    <Meta description='{`Inicio: ${this.props.initialLine}`}'/>
                    <Meta description='{`Encerramento: ${this.props.finishLine}`}'/>
                    <Meta style={metaStyle} description='{this.props.description}'/>
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