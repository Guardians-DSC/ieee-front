import React, { Component } from 'react';
import {Modal, Button, Form} from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

const DeleteForm = () => {

    const { getFieldDecorator } = this.props.form;

    const handleSubmit = async () => {
        const url = 'http://localhost:8080/task/' + this.props.taskId;
        axios.delete(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/JSON',
                'Content-Type': 'application/JSON'
            }
        })

        // this.props.form.validateFields((err, values) => {
        //     console.log(err)
        //     if (err) {
        //         console.log('Informações recebidas do formulário: ', values);
        //         this.removeTask();
        //     }
        // });

    }                                           

    return (
        <Form layout='inline' onSubmit={handleSubmit}>
            <FormItem >
                {getFieldDecorator('confirm', {
                    rules:[{required:true, message:'Confirme a remoção da atividade'}],
                })(
                    <Button type='danger' htmlType='submit' onClick={handleSubmit}>Sim, eu quero remover a atividade</Button>
                )
                }
            </FormItem>
        </Form>
    )
}

export default DeleteForm;
