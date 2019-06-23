import React, { Component } from 'react'
import {Modal, Button} from 'antd';
import Dele from './DeleteForm';

export default class DeleteModal extends Component {


    render() {

        if (!this.props.show) {
            return null;
        }


        return (
            <div>
                <Modal
                    visible={true}
                    title='Apagar Atividade'
                    onOk={this.props.onClose}
                    onCancel={this.props.onClose}
                    style={{top:'5rem'}}
                    footer={[
                        <Button type='submit' onClick={this.props.onClose}>
                            Voltar
                        </Button>
                    ]}
                >
                    <Dele taskId={this.props.taskId}/>
                </Modal>
            </div>
        )
        }
    }
