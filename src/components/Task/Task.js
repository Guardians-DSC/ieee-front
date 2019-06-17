import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {Card, Col, Icon} from 'antd';

export default class Task extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    };

    cardStyle = {
        textAlign: 'center'
    }

    editIcon = (
        <Icon 
            type="edit"
            onClick={(e) => {this.editTask(this.props.id, e)}}
            theme='twoTone'
        />
    );

    removeIcon = (
        <Icon
            type="delete"
            onClick={(e) => {this.removeTask(this.props.id, e)}}
            theme='twoTone'
            twoToneColor='#eb2f96'

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
                <Col span={4} style={{'marginBottom':'20px'}} xs={24} sm={12} md={4} >
                    <Card
                        title={this.props.title}
                        hoverable={true}
                        actions={
                            [
                            this.editIcon , this.removeIcon]
                        }
                        style={this.cardStyle}
                    >
                        {this.props.description}
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}
