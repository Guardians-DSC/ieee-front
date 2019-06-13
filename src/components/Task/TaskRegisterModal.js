import React, { Component } from 'react'
import {Modal, Button} from 'antd';
import PropTypes from 'prop-types';
import Register from './TaskRegister';


class TaskRegisterModal extends React.Component  {

    render() {

        if (!this.props.show) {
            return null
        }
        
        return (
            <div>
                <Modal 
                    visible={true}
                    title="Cadastro de Atividade"
                    onOk={this.props.onClose}
                    onCancel={this.props.onClose}
                    footer={null}
                >
                    <Register/>
                </Modal>
            </div>
        )
    }
}

TaskRegisterModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
}

export default TaskRegisterModal;