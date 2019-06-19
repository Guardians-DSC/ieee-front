import { Button, Form,  Input, InputNumber, DatePicker, TimePicker} from 'antd';
import * as React from 'react';

const FormItem = Form.Item;
const {TextArea} = Input;
const timeFormat = 'HH:mm';
const dateFormat = 'DD-MM-YYYY';

function hasErrors(fieldsError: any) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class TaskRegister extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdition:this.props.isEdition
        }
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Informações recebidas do formulário: ', values);
        }
        });
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const taskNameError = isFieldTouched('Nome da atividade') && getFieldError('Nome da atividade');
        const taskTypeError = isFieldTouched('Tipo da atividade') && getFieldError('Tipo da atividade');
        const workloadError = isFieldTouched('Carga Horária') && getFieldError('Carga Horária');
        const dateError = isFieldTouched('Data') && getFieldError('Data');
        const timeError = isFieldTouched('Horário') && getFieldError('Horário');

        return (
        <Form layout="vertical" onSubmit={this.handleSubmit}>
            <FormItem
            validateStatus={taskNameError ? 'error' : ''}
            help={taskNameError || ''}
            >
            {getFieldDecorator('Nome da atividade', {
                rules: [{ required: !this.state.isEdition, message: 'Por favor, informe o nome da atividade!' }],
            })(
                <Input allowClear placeholder="Nome da atividade" />
            )}
            </FormItem>
            <FormItem
            validateStatus={taskTypeError ? 'error' : ''}
            help={taskTypeError || ''}
            >
            {getFieldDecorator('Tipo da atividade', {
                rules: [{ required: !this.state.isEdition, message: 'Por favor, informe o tipo da atividade!' }],
            })(
                <Input allowClear placeholder="Tipo da atividade" />
            )}
            </FormItem>
            <Form.Item style={{marginBottom:0}}>
            <FormItem
                style={{ display: 'inline-block', width:'33.3%'}}
                validateStatus={workloadError ? 'error' : ''}
                help={workloadError || ''}
            >
                {getFieldDecorator('Carga Horária', {
                rules: [{ required: !this.state.isEdition, message: 'Por favor, informe a carga horária!' }],
                })(
                <InputNumber  min={0}  placeholder="Carga Horária" style={{width:'90%'}}/>
                )}
            </FormItem>
            <FormItem
                style={{ display: 'inline-block', width:'33.3%'}}
                validateStatus={timeError ? 'error' : ''}
                help={timeError || ''}
            >
                {getFieldDecorator('Horário', {
                rules: [{ required: !this.state.isEdition, message: 'Por favor, informe o horário' }],
                })(
                <TimePicker format={timeFormat} placeholder="Horário" style={{width:'90%'}}/>
                )}
            </FormItem>
            <FormItem
                style={{ display: 'inline-block', width:'33.3%'}}
                validateStatus={dateError ? 'error' : ''}
                help={dateError || ''}
            >
            {getFieldDecorator('Data', {
                rules: [{ required: !this.state.isEdition, message: 'Por favor, informe a data' }],
            })(
                <DatePicker format={dateFormat} placeholder="Data" />
            )}
            </FormItem>
            </Form.Item>
            <FormItem>
            {getFieldDecorator('Descrição da atividade', {
                rules: [{ required: false}],
            })(
                <TextArea allowclear="true" rows={4} placeholder="Descrição da atividade" />
            )}
            </FormItem>
            
            <FormItem>
            <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
            >
                Cadastrar Atividade
            </Button>
            </FormItem>
        </Form>
        );
    }
}

export default Form.create()(TaskRegister);
