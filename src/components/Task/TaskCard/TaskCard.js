import React, { Component } from 'react'
import {Card, Col, Icon} from 'antd';
import 'antd/dist/antd.css';
import './taskCard.css';
import Modal from '../TaskEditModal';
import DeleteModal from '../../DeleteConfirm/DeleteModal'

const { Meta } = Card;

export default class Task extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isRegisterOpen: false,
            isEdition: true,
            isDeleteOpen: false,
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

    openDeleteModal = () => {
        this.setState({
            isDeleteOpen: !this.state.isDeleteOpen
        })
        
    }
    
    
    

    render() {
        return (
            <React.Fragment>
                <Col span={4} style={{'marginBottom':'20px'}} xs={24} sm={12} md={8} lg={8} xl={4}>
                    <Card
                        title={this.props.title}
                        hoverable={true}
                        actions={
                            [<Icon
                                key='1' 
                                type="edit"
                                onClick={this.openRegisterModal}
                                theme='twoTone'
                                style={this.iconStyle}
                            /> ,
                            <Icon 
                                key='2'
                                type='delete'
                                onClick={this.openDeleteModal}
                                theme='twoTone'
                                twoToneColor='#eb2f96'
                                style={this.iconStyle}
                            />
                            ]
                        }
                        style={this.cardStyle}
                    >
                        <DeleteModal show={this.state.isDeleteOpen} onClose={this.openDeleteModal} taskId={this.props.id}/>
                        <Modal isEdition={this.state.isEdition} show={this.state.isRegisterOpen} onClose={this.openRegisterModal}/>
                        <Meta style={this.metaStyle} description={this.props.description}/>
                        
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}
