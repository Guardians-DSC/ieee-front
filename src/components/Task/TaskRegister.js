import { Button, Form,  Input, InputNumber, DatePicker, TimePicker, Select} from 'antd';
import * as React from 'react';

const { Option } = Select;
const FormItem = Form.Item;
const {TextArea} = Input;
const timeFormat = 'HH:mm';
const dateFormat = 'DD-MM-YYYY';
const taskTypes = ['Reunião', 'Confraternização', 'Atividade', 'Técnica', 'Evento', 'Palestra', 'Workshop' , 'Competição'];

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

    getChildren = taskTypes.map((taskType, index) => 
            <Option style={{width:'95%'}} key={index} value={taskType} >{taskType}</Option>
        );

    TaskSelection = (
        <Select
            showSearch
            showArrow={false}
            placeholder='Tipo da Atividade'
            required={true}
            allowClear
            style={{width:'95%'}}
            optionFilterProp="children"
        >
            {this.getChildren}
        </Select>
    );

    componentDidMount() {
        this.props.form.validateFields();
    }

    fetchNewTask = (formData) => {
        fetch('http://localhost:8080/task', {
            method: 'POST',
            headers: {
                'Accept': 'application/JSON',
                'Content-Type': 'application/JSON'
            }, body: JSON.stringify({
                name: formData.name,
                type:  formData.type,
                description:  formData.description,
                date:  formData.date._d,
                workload:  formData.workload,
                time:  formData.time._d
            })
        })
    }

    handleSubmit = (e) => {
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Informações recebidas do formulário: ', values);
            e.preventDefault()
            this.props.addTask(values)
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
                    {getFieldDecorator('name', {
                        rules: [{ required: !this.state.isEdition, message: 'Por favor, informe o nome da atividade!' }],
                    })(
                    <Input allowClear placeholder="Nome da atividade" />
                )}
                </FormItem>
                <Form.Item style={{marginBottom:0}}>
                    <FormItem
                        style={{ display: 'inline-block', width:'50%'}}
                        validateStatus={taskTypeError ? 'error' : ''}
                        help={taskTypeError || ''}
                    >
                        {getFieldDecorator('type', {
                            rules: [{ required: !this.state.isEdition, message: 'Por favor, informe o tipo da atividade!' }],
                    })(this.TaskSelection)
                        }
                    </FormItem>
                    <FormItem
                        style={{ display: 'inline-block', width:'50%'}}
                        validateStatus={workloadError ? 'error' : ''}
                        help={workloadError || ''}
                    >
                        {getFieldDecorator('workload', {
                            rules: [{ required: !this.state.isEdition, message: 'Por favor, informe a carga horária!' }],
                        }, 
                        )(<InputNumber defaultValue='1' Option min={0}  placeholder="Carga Horária" style={{width:'95%'}}/>)
                        }
                    </FormItem>
                    <FormItem
                        style={{ display: 'inline-block', width:'50%'}}
                        validateStatus={timeError ? 'error' : ''}
                        help={timeError || ''}
                    >
                        {getFieldDecorator('time', {
                            rules: [{ required: !this.state.isEdition, message: 'Por favor, informe o horário' }],
                        }
                        )(<TimePicker format={timeFormat} placeholder="Horário" style={{width:'95%'}}/>)
                        }
                    </FormItem>
                    <FormItem
                        style={{ display: 'inline-block', width:'50%'}}
                        validateStatus={dateError ? 'error' : ''}
                        help={dateError || ''}
                    >
                        {getFieldDecorator('date', {
                            rules: [{ required: !this.state.isEdition, message: 'Por favor, informe a data' }],
                        }
                        )(<DatePicker value={'dateFormat'} format={dateFormat} placeholder="Data" style={{width:'95%'}}/>)
                        }
                    </FormItem>
                </Form.Item>
                <FormItem>
                    {getFieldDecorator('description', {
                        rules: [{ required: false}],
                }
                )(<TextArea allowclear="true" rows={4} placeholder="Descrição da atividade" />)
                }
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
