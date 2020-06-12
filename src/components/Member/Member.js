import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Card, Col, Icon} from 'antd';

const Member = () => {

    const cardStyle = {
        textAlign: 'center'
    }

    const iconStyle = {
        width:'13rem'
    }

    editIcon = (
        <Icon 
            type="edit"
            onClick={(e) => {this.editMember(this.props.id, e)}}
            theme='twoTone'
            style={this.iconStyle}
        />
    );

    removeIcon = (
        <Icon
            type="delete"
            onClick={(e) => {this.removeMember(this.props.id, e)}}
            theme='twoTone'
            twoToneColor='#eb2f96'
            style={this.iconStyle}
        />
    )
    
    removeMember = (id, e) => {
        console.log('Remover Membro')
        e.preventDefault();
        console.log(id);
    }
    
    editMember = (id, e) => {
        console.log('Editar Membro');
        e.preventDefault();
        console.log(id)
    }

    return (
        <React.Fragment>
            <Col span={4} style={{'marginBottom':'20px'}}  xs={24} sm={12} md={4}>
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
    )
}

export default Member;