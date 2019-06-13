import React, { Component } from 'react'
import {Modal, Button} from 'antd';


export default class TaskRegisterModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            visible: this.props.visible,
        }
    }

    handleOk = () => {
        this.setState({
            loading: false,
            visible: !this.props.visible,
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {

        const {visible, loading} = this.state;

        return (
            <div>
                <Modal 
                    visible={visible}
                    title="Cadastro de Atividade"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button 
                            key='back'
                            onClick={this.handleCancel}
                        >
                        Return 
                        </Button>,
                        <Button 
                            key='submit'
                            type="primary"
                            onClick={this.handleOk}
                        >
                        Submit 
                        </Button>
                    ]}
                >

                </Modal>
            </div>
        )
    }
}
