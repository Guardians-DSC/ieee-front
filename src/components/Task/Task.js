import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {Card, Col} from 'antd';

export default class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    };

    render() {
        return (
            <React.Fragment>
                <Col span={4} style={{'marginBottom':'20px'}} xs={24} sm={12} md={4} >
                    <Card title={this.props.title} >
                        {this.props.description}
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}
