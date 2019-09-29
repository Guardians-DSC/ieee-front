import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {useState, useEffect} from 'react';
import SideBar from '../Sider/SideBar';

import { Row, Col, Input, Select, TimePicker, InputNumber, DatePicker, Button } from 'antd';

const InputGroup = Input.Group;
const { TextArea } = Input;
const { Option } = Select;

const taskTypes = ['Reunião', 'Confraternização', 'Atividade', 'Técnica', 'Evento', 'Palestra', 'Workshop' , 'Competição'];
const timeFormat = 'HH:mm';
const dateFormat = 'DD-MM-YYYY';


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
    >
        {TaskOptions}
    </Select>)
}


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
                            <Input size="large" placeholder="Nome da Nova Atividade" allowClear />
                        </Col>
                    </Row>
                </InputGroup>
                <InputGroup>
                    <Row>
                        <Col span={6} offset={4} style={style.item}>
                            <TaskSelection />
                        </Col>
                        <Col span={6} offset={1} style={style.item}>
                            <InputNumber size="large" Option min={1} placeholder="Carga Horária" style={{width:'100%'}}/>
                        </Col>
                    </Row>
                </InputGroup>
                <InputGroup size="large">
                    <Row>
                        <Col span={6} offset={4} style={style.item}>
                            <DatePicker  format={dateFormat} placeholder="Data da Atividade" style={{width:'100%'}} />
                        </Col>
                        <Col span={6} offset={1} style={style.item}>
                            <TimePicker size="large" format={timeFormat} placeholder="Hora" style={{width:'100%'}}/>
                        </Col>
                    </Row>
                </InputGroup>
                <InputGroup size="large" >
                    <Row >
                        <Col span={13} offset={4} style={style.item}>
                            <TextArea autosize={{minRows:4, maxRows:6}} placeholder="Descrição da Atividade" />
                        </Col>
                    </Row>
                </InputGroup>
                <InputGroup size="large" >
                    <Row >
                        <Col span={6} offset={4} style={style.item}>
                            <Button type="primary" size="large" >Cadastrar</Button>
                        </Col>
                    </Row>
                </InputGroup>
                
                

            </div>
            
        </div>
    )
}

export default Register;
