import React, { Component } from 'react';
import {Modal, Button, Form} from 'antd';

const FormItem = Form.Item;


class DeleteForm extends Component {


    removeTask = () => {
        const uri = 'http://localhost:8080/task/' + this.props.taskId;
        fetch(uri , {
            method: 'DELETE',
            headers: {
                'Accept': 'application/JSON',
                'Content-Type': 'application/JSON'
            }
        }).then(response => console.log(response));
        
    }

    handleSubmit = e => {
        //e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Informações recebidas do formulário: ', values);
                this.removeTask();
            }
        });

    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form layout='inline' onSubmit={this.handleSubmit}>
                <FormItem >
                    {getFieldDecorator('confirm', {
                        rules:[{required:true, message:'Confirme a remoção da atividade'}],
                    })(
                        <Button type='danger' htmlType='submit'>Sim, eu quero remover a atividade</Button>
                    )
                    }
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(DeleteForm);
