import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {Card, Col, Icon} from 'antd';
import './task.css'

const { Meta } = Card;

export default class Task extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    };

    cardStyle = {
        textAlign: 'center',
    }

    metaStyle = {
        height: '10rem',
        overflowY:'auto',
        textOverflow:'clip',
    }


    iconStyle = {
        width:'100%'
    }

    editIcon = (
        <Icon 
            type="edit"
            onClick={(e) => {this.editTask(this.props.id, e)}}
            theme='twoTone'
            style={this.iconStyle}
        />
    );

    removeIcon = (
        <Icon
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
    

    render() {
        return (
            <React.Fragment>
                <Col span={4} style={{'marginBottom':'20px'}} xs={24} sm={12} md={8} xl={4}>
                    <Card
                        id='teste'
                        title={this.props.title}
                        hoverable={true}
                        actions={
                            [
                            this.editIcon , this.removeIcon]
                        }
                        style={this.cardStyle}
                    >
                        <Meta style={this.metaStyle} description={this.props.description}/>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}
