import React from 'react';
import fieldsValidator from '../../services/fieldsValidator';
import {useState, useContext} from 'react';
import { Col, Input, Select, Button } from 'antd';import 'antd/dist/antd.css';
import { UserContext } from '../../storage/context/UserContext';
import SideBar from '../Sidebar/SideBar';
import style from './RegisterStyle'

const { Option } = Select;

const Register = () => {
    const { addUser } = useContext(UserContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();   
    const [password, setPassword] = useState();
    const [departament, setDepartament] = useState();
    const [isAdmin, setIsAdmin] = useState(false);
   
    const handleSubmit = () => {
        addUser ({
            name: name,
            email: email,
            password: password,
            department: departament,
            isAdmin: isAdmin
        });
    }

    const isUndefinedField = ( field ) => fieldsValidator.isUndefined( field ) ? true : false;
    const isEmptyField = ( field ) => fieldsValidator.isEmpty( field ) ? true : false;
    const isNumericField = ( field ) => fieldsValidator.isNumeric( field ) ? true : false;

    const validateFields = () => {
        const isEmailValid      = !isUndefinedField(email)       && !isEmptyField(email) && !isNumericField(email);
        const isNameValid       = !isUndefinedField(name)        && !isEmptyField(name);
        const isPasswordValid   = !isUndefinedField(password)    && !isEmptyField(password);
        const isDepartmentValid = !isUndefinedField(departament) && !isEmptyField(departament);

        return ( isEmailValid && isNameValid && isPasswordValid && isDepartmentValid );
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
                    <Input placeholder="Senha" onChange={event => setPassword(event.target.value)} size="large" allowClear />
                </Col>
                <Col span={13} offset={4} style={style.item}>
                    <Input placeholder="Departament" onChange={event => setDepartament(event.target.value)} size="large" allowClear />
                </Col>
                <Col span={13} offset={4} style={style.item}>
                    <Select placeholder="Cadastrar como administrador" size="large" onChange={event=>setDepartament(true)} showArrow={true} style={{width: '100%'}}>
                        <Option value={true} key={1}> {'Sim'} </Option>
                        <Option value={false} key={0}> {'Não'} </Option>
                    </Select>  
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
