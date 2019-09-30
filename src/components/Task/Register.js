import React from 'react';
import axios from 'axios';
import validator from 'validator';

import SideBar from '../Sider/SideBar';

import {useState, useEffect} from 'react';
import { Row, Col, Input, Select, TimePicker, InputNumber, DatePicker, Button } from 'antd';
import 'antd/dist/antd.css';

const InputGroup = Input.Group;
const { TextArea } = Input;
const { Option } = Select;
const { ignore_whitespace } = validator;

const taskTypes = ['Reunião', 'Confraternização', 'Atividade', 'Técnica', 'Evento', 'Palestra', 'Workshop' , 'Competição'];
const timeFormat = 'HH:mm';
const dateFormat = 'DD-MM-YYYY';

const style = {
    container: {
        'width': '100vw',
        'display': 'flex',
        'height': '100vh',
        /*
        * Centraliza o componente
        */
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)'
    },
    input: {
        'display': 'inline',
        'margin': 'auto',
        'width' : '90%',
        'paddingTop': '20rem',
        'height': '100vh',
        
    },
    item: {
        'marginBottom': '2rem',
    },
    inputHeader: {
        'textAlign': 'center',
        'padding': '2rem',
        'marginTop': '-10rem',
        'fontSize' : '3rem',
        'textTransform': 'uppercase',
        'fontWeight': '500',
    }
}

const canClick = () => {
    return true
}

const Register = props => {
    const [name, setName] = useState('');
    const [type, setType] = useState();
    const [workload, setWorkload] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('http://localhost:8080/task')

    function clicou() {
        console.log(name, type, workload, time, date, description);
    }

    const TaskOptions = taskTypes.map((taskType, index) => (
        <Option value={taskType} key={index}> {taskType} </Option>
        )
    );

    const TaskSelection = () => {
        return (<Select
            showSearch
            placeholder="Selecione o tipe de Atividade"
            style={{width: '100%'}}
            allowClear
            showArrow={false}
            size="large"
            value={type}
            onChange={event=>setType(event)}
        >
            {TaskOptions}
        </Select>)
    }

    const handleSubmit = async () => {
        
        /* return await axios.post(url, {
            name: name,
            type: type,
            workload: workload,
            date: date,
            time: time,
            description: description
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (err) {
            console.log(err)
        }) */
    }

    const validateFields = () => {
        const trimedName = validator.trim(name, ' ');
        const isNameValid = validator.isEmpty(trimedName, {ignore_whitespace});

        const trimedType = validator.trim(type, ' ');
        const isTypeValid = validator.isEmpty(trimedType, {ignore_whitespace});

        const trimedWorkload = validator.trim(workload, ' ');
        const isWorkloadEmpty = validator.isEmpty( trimedWorkload, {ignore_whitespace});
        const isWorkloadNumeric = validator.isNumeric(trimedWorkload, {no_symbols: true});

        const trimedTime = validator.trim(type, ' ');
        const isTimeValid = validator.isEmpty(trimedTime, {ignore_whitespace});

        const trimedDate = validator.trim(type, ' ');
        const isDateValid = validator.isEmpty(trimedDate, {ignore_whitespace});

        return isNameValid && isTypeValid && isWorkloadEmpty && isWorkloadNumeric && isTimeValid && isDateValid;
    }

    return(
        <div style={style.container} >
            <SideBar/>
            <div style={style.input}>
                <Row>
                    <Col span={13} offset={4} style={style.inputHeader}>
                        cadastro de atividade
                    </Col>
                </Row>

                <InputGroup >
                    <Row >
                        <Col span={13} offset={4} style={style.item}>
                            <Input onChange={event => setName(event.target.value)} size="large" placeholder="Nome da Nova Atividade" allowClear />
                        </Col>
                    </Row>
                </InputGroup>
                <InputGroup>
                    <Row>
                        <Col span={6} offset={4} style={style.item}>
                            <TaskSelection />
                        </Col>
                        <Col span={6} offset={1} style={style.item}>
                            <InputNumber onChange={value=>setWorkload(value)} size="large" Option min={1} placeholder="Carga Horária" style={{width:'100%'}}/>
                        </Col>
                    </Row>
                </InputGroup>
                <InputGroup size="large">
                    <Row>
                        <Col span={6} offset={4} style={style.item}>
                            <DatePicker onChange={value=>setDate(value._d)} format={dateFormat} placeholder="Data da Atividade" style={{width:'100%'}} />
                        </Col>
                        <Col span={6} offset={1} style={style.item}>
                            <TimePicker onChange={value=>setTime(value._d)} size="large" format={timeFormat} placeholder="Hora" style={{width:'100%'}}/>
                        </Col>
                    </Row>
                </InputGroup>
                <InputGroup size="large" >
                    <Row >
                        <Col span={13} offset={4} style={style.item}>
                            <TextArea onChange={event=>setDescription(event.target.value)} autosize={{minRows:4, maxRows:6}} placeholder="Descrição da Atividade" />
                        </Col>
                    </Row>
                </InputGroup>
                <InputGroup size="large" >
                    <Row >
                        <Col span={6} offset={4} style={style.item}>
                            <Button type="primary" size="large" onClick={handleSubmit}>Cadastrar</Button>
                        </Col>
                    </Row>
                </InputGroup>
            </div>
            
        </div>
    )
}

export default Register;
