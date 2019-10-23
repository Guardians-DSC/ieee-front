import React, { Component } from 'react';
import {Modal, Button, Form} from 'antd';
import axios from 'axios';

const FormItem = Form.Item;


class DeleteForm extends Component {


    removeTask = () => {
        const url = 'http://localhost:8080/task/' + this.props.taskId;
        console.log(url);
        axios.delete(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/JSON',
                'Content-Type': 'application/JSON'
            }
        }).fetch(response => console.log(response)) 
    }

    handleSubmit = async () => {
        this.removeTask();

        // this.props.form.validateFields((err, values) => {
        //     console.log(err)
        //     if (err) {
        //         console.log('Informações recebidas do formulário: ', values);
        //         this.removeTask();
        //     }
        // });

    }                                           

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form layout='inline' onSubmit={this.handleSubmit}>
                <FormItem >
                    {getFieldDecorator('confirm', {
                        rules:[{required:true, message:'Confirme a remoção da atividade'}],
                    })(
                        <Button type='danger' htmlType='submit' onClick={this.handleSubmit}>Sim, eu quero remover a atividade</Button>
                    )
                    }
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(DeleteForm);
