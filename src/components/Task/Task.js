import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {Card, Col, Icon} from 'antd';

Icon.setTwoToneColor('#eb2f96');
Icon.getTwoToneColor(); // #eb2f96

export default class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    };

    clicou(titulo) {
        console.log('Clicou pra editar ' + titulo);
    }

    deletar() {
        console.log('vai deletar ? ')
    }

    render() {
        return (
            <React.Fragment>
                <Col span={4} style={{'marginBottom':'20px'}} xs={24} sm={12} md={4} >
                    <Card title={this.props.title} hoverable={true} extra={<Icon type="edit" />} actions={[<Icon type="delete" theme="twoTone" />]}>
                        {this.props.description}
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}
