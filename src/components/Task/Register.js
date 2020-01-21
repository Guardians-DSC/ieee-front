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


const Register = props => {
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
            ) 
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
                <InputGroup >
                    <Row >
                        <Col span={13} offset={4} style={style.item}>
                            <Input onChange={event => setnucle(event.target.value)} size="large" placeholder="Núcleo a qual pertence a atividade" allowClear />
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
                            <DatePicker onChange={value=>setInitialLine(value)} format={dateFormat} placeholder="Data De Inicio" style={{width:'100%'}} />
                        </Col>
                        <Col span={6} offset={1} style={style.item}>
                            <TimePicker onChange={value=>setInitialLine(value)} size="large" format={timeFormat} placeholder="Horário De Início" style={{width:'100%'}}/>
                        </Col>
                    </Row>
                </InputGroup>
                <InputGroup size="large">
                    <Row>
                        <Col span={6} offset={4} style={style.item}>
                            <DatePicker onChange={value=>setFinishLine(value)} format={dateFormat} placeholder="Data De Encerramento" style={{width:'100%'}} />
                        </Col>
                        {/* <Col span={6} offset={1} style= {style.item}>
                            <TimePicker onChange={value=>setFinishLine(value)} size="large" format={timeFormat} placeholder="Horário De Encerramento" style={{width:'100%'}}/>
                        </Col> */}
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
                            <Button disabled={!validateFields()} type="primary" size="large" onClick={handleSubmit} refresh="true">Cadastrar</Button>
                        </Col>
                    </Row>
                </InputGroup>
            </div>            
        </div>
    )
}

export default Register;