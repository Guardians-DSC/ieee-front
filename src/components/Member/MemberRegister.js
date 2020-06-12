import React from 'react';
import axios from 'axios';
import fieldsValidator from '../../services/fieldsValidator';
import {useState, useEffect} from 'react';
import { Row, Col, Input, Select, TimePicker, InputNumber, DatePicker, Button } from 'antd';
import { validate } from '@babel/types';
import 'antd/dist/antd.css';

import SideBar from '../Sider/SideBar';

const InputGroup = Input.Group;
const { TextArea } = Input;

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
    const [email, setEmail] = useState('');   
    const [senha, setSenha] = useState('');
    const [url, setUrl] = useState('http://localhost:8080/user')
   
    
    const handleSubmit = async () => {
        
        console.log(validateFields())

        
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
        const isNameValid = validateName(name);
        const isEmailValid = validateEmail(email);
        const isSenhaValid = validateUndefined(senha);
        
        return (
            isNameValid &&
            isEmailValid &&
            isSenhaValid
            ) 
        }

    const validateUndefined = (field) => {
        if (fieldsValidator.isUndefined(field)) {
            return false;
        } else {
            return true;
        }
    }
    
    const validateName = (field) => {
        if (fieldsValidator.isEmpty(field)) {
            console.log("Field is empty");
            return false;
        } else {
            console.log("Field is valid", field);
            return true
        }
    }

    const validateEmail = (field) => {
        if (fieldsValidator.isEmpty(field)) {
            console.log("Field is empty");
            return false;
        } if (fieldsValidator.isNumeric(field)) {
            console.log("Email is invalid");
            return false;
        } else {
            console.log("Field is valid", field);
            return true
        }
    }

    return(
        <div style={style.container} >
            <SideBar/>
            <div style={style.input}>
                <Col span={13} offset={4} style={style.inputHeader}> CADASTRO DE MEBRO </Col>
                <Col span={13} offset={4} style={style.item}>
                    <Input placeholder="Nome do Novo Membro" onChange={event => setName(event.target.value)} size="large" allowClear />
                </Col>
                <Col span={13} offset={4} style={style.item}>
                    <Input placeholder="Email" onChange={event => setEmail(event.target.value)} size="large" allowClear />
                </Col>
                <Col span={13} offset={4} style={style.item}>
                    <Input placeholder="Senha" onChange={event => setSenha(event.target.value)} size="large" allowClear />
                </Col>
                <Col span={6} offset={4} style={style.item}>
                    <Button disabled={!validateFields()} type="primary" size="large" onClick={handleSubmit}>
                        Cadastrar
                    </Button>
                </Col>
             </div>            
        </div>
    )
}

export default Register;
