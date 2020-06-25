import React from 'react';
import { useState, useContext } from 'react';
//import 'antd/dist/antd.css';
import { Col, Input, Select, TimePicker, InputNumber, DatePicker, Button } from 'antd';

import SideBar from '../../Sidebar/SideBar';
import fieldsValidator from '../../../services/fieldsValidator';
import { TaskContext } from '../../../storage/context/TaskContext';

import style from './RegisterStyle'

const InputGroup = Input.Group;
const { TextArea } = Input;
const { Option } = Select;

const taskTypes = ['Reunião', 'Confraternização', 'Atividade', 'Técnica', 'Evento', 'Palestra', 'Workshop' , 'Competição'];
const timeFormat = 'HH:mm';
const dateFormat = 'DD-MM-YYYY';

const Register = () => {
    const { addTask } = useContext(TaskContext);
    const [name, setName] = useState('');
    const [nucle, setnucle] = useState('');
    const [type, setType] = useState();
    const [workload, setWorkload] = useState();
    const [initialDate, setInitialDate] = useState(undefined);
    const [finalDate, setFinalDate] = useState(undefined);
    const [startTime, setStartTime] = useState(undefined);
    const [closingTime, setClosingTime] = useState(undefined);
    const [description, setDescription] = useState('');
                
    const handleSubmit = () => {
        addTask ({
            name: name,
            type: type,
            description: description,
            initialDate: initialDate,
            finalDate: finalDate,
            startTime: startTime,
            closingTime: closingTime,
            workload: workload,
            nucle: nucle
        });
    }
    
    const isUndefinedField = ( field ) => fieldsValidator.isUndefined( field ) ? true : false;
    const isEmptyField = ( field ) => fieldsValidator.isEmpty( field ) ? true : false;

    const validateFields = () => {
        const isNameValid        = !isUndefinedField(name)        && !isEmptyField(name);
        const isTypeValid        = !isUndefinedField(type)        && !isEmptyField(type);
        const isWorkloadValid    = !isUndefinedField(workload)    && !isEmptyField(workload);
        const isIntialDateValid  = !isUndefinedField(initialDate) && !isEmptyField(initialDate);
        const isFinalDateValid   = !isUndefinedField(finalDate)   && !isEmptyField(finalDate);
        const isStartTimeValid   = !isUndefinedField(startTime)   && !isEmptyField(startTime);
        const isClosingTimeValid = !isUndefinedField(closingTime) && !isEmptyField(closingTime);
        const isDescriptionValid = !isUndefinedField(description) && !isEmptyField(description);
        
        return (
            isNameValid && isTypeValid && isWorkloadValid && isIntialDateValid &&
            isFinalDateValid && isStartTimeValid && isClosingTimeValid && isDescriptionValid
        );
    }
    
    const TaskOptions = taskTypes.map(
        (taskType, index) => (
            <Option value={taskType} key={index}> {taskType} </Option>
        )
    );

    return(
        <div style={style.container} >
            <SideBar/>
            <div style={style.input}>
                <Col span={13} offset={4} style={style.inputHeader}> CADASTRO DE ATIVIDADE </Col>
                <Col span={13} offset={4} style={style.item}>
                    <Input placeholder="Nome da Nova Atividade" onChange={event => setName(event.target.value)} size="large" allowClear />
                </Col>
                <Col span={13} offset={4} style={style.item}>
                    <Input placeholder="Núcleo a qual pertence a atividade" onChange={event => setnucle(event.target.value)} size="large" allowClear />
                </Col>
                <Col span={6} offset={4} style={style.item}>
                    <DatePicker placeholder="Data De Inicio" onChange={value=>setInitialDate(value)} size="large" format={dateFormat} style={{width:'100%'}} />
                </Col>
                <Col span={6} offset={1} style={style.item}>
                    <DatePicker placeholder="Data De Encerramento" onChange={value=>setFinalDate(value)} size="large" format={dateFormat} style={{width:'100%'}} />
                </Col>
                <Col span={6} offset={4} style={style.item}>
                    <TimePicker placeholder="Horário De Início" onChange={value=>setStartTime(value)} size="large" format={timeFormat} style={{width:'100%'}}/>
                </Col>
                <Col span={6} offset={1} style={style.item}>
                    <TimePicker placeholder="Horário De Encerramento" onChange={value=>setClosingTime(value)} size="large" format={timeFormat} style={{width:'100%'}}/>
                </Col>
                <Col span={6} offset={4} style={style.item}>
                    <InputNumber placeholder="Carga Horária" onChange={value=>setWorkload(value)} size="large" Option min={1} style={{width:'100%'}}/>
                </Col>
                <Col span={6} offset={1} style={style.item}>
                    <Select placeholder="Tipo da Atividade" onChange={event=>setType(event)} size="large" value={type} showArrow={false} style={{width: '100%'}}>
                        {TaskOptions}
                    </Select>                
                </Col>
                <Col span={13} offset={4} style={style.item}>
                    <TextArea placeholder="Descrição da Atividade" onChange={event=>setDescription(event.target.value)} autosize={{minRows:4, maxRows:6}}/>
                </Col>
                <Col span={6} offset={4} style={style.item}>
                    <Button  disabled={!validateFields()} type="primary" size="large" onClick={handleSubmit} refresh="true">
                        Cadastrar
                    </Button>
                </Col>
            </div>
        </div>
    )
}

export default Register;