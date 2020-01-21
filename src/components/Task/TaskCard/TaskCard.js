import React, { Component } from 'react'
import {Card, Col, Icon} from 'antd';
import 'antd/dist/antd.css';
import './taskCard.css';
import TaskEditModal from '../TaskEditModal';
import DeleteModal from '../../DeleteConfirm/DeleteModal'
import Grid from 'antd/lib/card/Grid';

const { Meta } = Card;

export default class Task extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isRegisterOpen: false,
            isEdition: true,
            isDeleteOpen: false,
//            isDownloadOpen: false
        };
    };

    cardStyle = {
        textAlign: 'center',
    }

    metaStyle = {
        height: '10rem',
        overflowY:'auto',
        textOverflow:'clip',
        textAlign: 'start'
    }


    iconStyle = {
        width:'100%'
    }

   
    
    /* removeTask = (id, e) => {
        console.log('Remover Atividade', this.state);
        const uri = 'http://localhost:8080/task/' + id;
        fetch(uri , {
            method: 'DELETE',
            headers: {
                'Accept': 'application/JSON',
                'Content-Type': 'application/JSON'
            }
        });
    } */
    

    openRegisterModal = () => {
        this.setState({
            isRegisterOpen: !this.state.isRegisterOpen
        })
    }

    // openDownloadModal = () => {
    //     this.setState({
    //         isDownloadOpen: !this.state.isDownloadOpen
    //     })
    // }

    openDeleteModal = () => {
        this.setState({
            isDeleteOpen: !this.state.isDeleteOpen
        })    
    }

    
    render () {
        return (
            <React.Fragment>
                <Col span={4} style={{'marginBottom':'20px'}} xs={24} sm={12} md={8} lg={8} xl={4}>
                    <Card
                        title={this.props.title}
                        cover={this.props.nucle}
                        hoverable={true}
                        actions={[
                            <Icon
                                key='1' 
                                type='edit'
                                onClick={this.openRegisterModal}
                                theme='twoTone'
                                style={this.iconStyle}
                            /> ,
                            <Icon
                                key='2'
                                type='copy'
                                onClick={this.openDownloadModal}
                                theme='twoTone'
                                style={this.iconStyle}
                            />,
                            <Icon
                                key='3'
                                type='delete'
                                onClick={this.openDeleteModal}
                                theme='twoTone'
                                twoToneColor='#eb2f96'
                                style={this.iconStyle}
                            />
                        ]}
                        style={this.cardStyle}
                    >
                        <DeleteModal show={this.state.isDeleteOpen} onClose={this.openDeleteModal} taskId={this.props.id}/>
                        <TaskEditModal 
                            id={this.props.id}
                            title={this.props.name}
                            description={this.props.description}
                            isEdition={this.state.isEdition} 
                            show={this.state.isRegisterOpen}
                            onClose={this.openRegisterModal}
                        />
                        <Meta description={`Carga Horária: ${this.props.workload}`}/>
                        <Meta description={`Tipo: ${this.props.type}`}/>

                        <Meta description={`Inicio: ${this.props.initialLine}`}/>
                        <Meta description={`Encerramento: ${this.props.finishLine}`}/>
                        <Meta style={this.metaStyle} description={this.props.description}/>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}


/*
    openDownloadModal = () => {
        this.setState({
            isDownloadOpen: !this.state.isDownloadOpen
        })
    }
*/