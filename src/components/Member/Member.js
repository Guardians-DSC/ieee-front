import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Card, Col} from 'antd';

export default class Member extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <React.Fragment>
                <Col span={4} style={{'marginBottom':'20px'}}>
                    <Card title={this.props.title} bordered >
                        {this.props.description}
                    </Card>
                </Col>
            </React.Fragment>
        )
    }
}
