import React, { Component } from 'react'
import {Card, Col, Icon} from 'antd';
import 'antd/dist/antd.css';
import './task.css'
import Modal from './TaskEditModal'

const { Meta } = Card;

export default class Task extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
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

    editIcon = (
        <Icon
            key='1' 
            type="edit"
            //onClick={(e) => {this.editTask(this.props.id, e)}}
            onClick={this.openModal}
            theme='twoTone'
            style={this.iconStyle}
        />
    );

    removeIcon = (
        <Icon
            key='2'
            type="delete"
            onClick={(e) => {this.removeTask(this.props.id, e)}}
            theme='twoTone'
            twoToneColor='#eb2f96'
            style={this.iconStyle}

        />
    )
    
    removeTask = (id, e) => {
        console.log('Remover Atividade')
        e.preventDefault();
        console.log(id);
    }
    
    editTask = (id, e) => {
        console.log('Editar Atividade');
        e.preventDefault();
        console.log(id)
    }

    openModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    

    render() {
        return (
            <React.Fragment>
                <Col span={4} style={{'marginBottom':'20px'}} xs={24} sm={12} md={8} xl={4}>
                    <Card
                        id='teste'
                        title={this.props.title}
                        hoverable={true}
                        actions={
                            [<Icon
            key='1' 
            type="edit"
            //onClick={(e) => {this.editTask(this.props.id, e)}}
            onClick={this.openModal}
            theme='twoTone'
            style={this.iconStyle}
        /> , this.removeIcon]
                        }
                        style={this.cardStyle}
                    >
                        <Modal show={this.state.isOpen} onClose={this.openModal}/>
                        <Meta style={this.metaStyle} description={this.props.description}/>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}
