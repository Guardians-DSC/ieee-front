import React from 'react';
import axios from 'axios';
import fieldsValidator from '../../services/fieldsValidator';

import SideBar from '../Sider/SideBar';

import {useState, useEffect} from 'react';
import { Row, Col, Input, Select, TimePicker, InputNumber, DatePicker, Button } from 'antd';
import 'antd/dist/antd.css';
import { validate } from '@babel/types';

const InputGroup = Input.Group;
const { TextArea } = Input;
const { Option } = Select;

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
        'display': 'block',
        'margin': 'auto',
        'width' : '90%',
        'paddingTop': '12rem',
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


const Register = () => {
    const [name, setName] = useState('');
    const [nucle, setnucle] = useState('');
    const [type, setType] = useState();
    const [workload, setWorkload] = useState();
    const [initialLine, setInitialLine] = useState(undefined);
    const [finishLine, setFinishLine] = useState(undefined);
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('http://localhost:8080/task')
    
    const TaskOptions = taskTypes.map(
        (taskType, index) => (
            <Option value={taskType} key={index}> {taskType} </Option>
        )
    );
            
    const handleSubmit = async () => {
        return axios.post(url, {
            name: name,
            nucle, nucle,
            type: type,
            workload: workload,
            initialLine: initialLine,
            finishLine: finishLine,
            description: description
        }).then(window.location.reload())
        
        // console.log(validateFields())
        // console.log('app rodando!');
        // fetch(URL)
        // .then(response => response.json())
        // .then(dado => {
        //     console.log(dado);
        //     dado.forEach(disciplina => {
        //         let $p = document.createElement("p");
        //         $disciplinas.appendChild($p);
        //         $p.innerText = "Disciplina: " + disciplina.nome;
        //     });
        //     return axios.post(url, {
        //         name: name,
        //         type: type,
        //         workload: workload,
        //         initialDate: initialDate,
        //         i 
        //     .then(function (response) {
        //         console.log(response)
        //     })
        //     .catch(function (err) {
        //         console.log(err)
        //     }) 
    }
    
    const validateFields = () => {
        const isNameValid = validateNotEmpty(name);
        const isNucleValid = validateNotEmpty(nucle);
        const isTypeValid = validateNotEmpty(type);
        const isWorkloadValid = validateUndefined(workload);
        const isInitialLineValid = validateUndefined(initialLine);
        const isFinishLineValid = validateUndefined(finishLine);
        const isDescriptionValid = validateNotEmpty(description);
        return (
            isNameValid &&
            isNucleValid &&
            isTypeValid &&
            isWorkloadValid &&
            isInitialLineValid &&
            isFinishLineValid &&
            isDescriptionValid 
        );
    }

    const validateUndefined = (field) => {
        if (fieldsValidator.isUndefined(field)) {
            return false;
        } else {
            return true;
        }
    }
    
    
    const validateNotEmpty = (field) => {
        if (fieldsValidator.isEmpty(field)) {
            console.log("Field is empty");
            return false;
        } else {
            console.log("Field is  valid", field);
            return true
        }
    }
    

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
                    <DatePicker placeholder="Data De Inicio" onChange={value=>setInitialLine(value)} size="large" format={dateFormat} style={{width:'100%'}} />
                </Col>
                <Col span={6} offset={1} style={style.item}>
                    <DatePicker placeholder="Data De Encerramento" onChange={value=>setFinishLine(value)} size="large" format={dateFormat} style={{width:'100%'}} />
                </Col>
                <Col span={6} offset={4} style={style.item}>
                    <TimePicker placeholder="Horário De Início" onChange={value=>setInitialLine(value)} size="large" format={timeFormat} style={{width:'100%'}}/>
                </Col>
                <Col span={6} offset={1} style={style.item}>
                    <TimePicker placeholder="Horário De Encerramento" onChange={value=>setInitialLine(value)} size="large" format={timeFormat} style={{width:'100%'}}/>
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