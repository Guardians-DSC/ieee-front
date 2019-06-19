import React, { Component } from 'react'
import {Modal, Button} from 'antd';
import PropTypes from 'prop-types';
import Register from './TaskRegister';


export default class TaskEditModal extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div>
                <Modal
                    visible={true}
                    title='Editar Atividade'
                    onOk={this.props.onClose}
                    onCancel={this.props.onClose}
                    style={{top:'5rem'}}
                    footer={[
                        <Button type='submit' onClick={this.props.onClose}>
                            Voltar
                        </Button>
                    ]}
                >
                    <Register/>
                </Modal>
            </div>
        )
    }
}
