import React from 'react';
import {useState } from 'react';
import { Col, Input, Select, Button } from 'antd';import 'antd/dist/antd.css';

import fieldsValidator from '../../Utils/fieldsValidator';
import SideBar from '../Sidebar/SideBar';
import style from '../../Style/Style'

import { useUserDataContext } from '../../storage/context/UserContext';

const { Option } = Select;

const Register = () => {
  const { addUser } = useUserDataContext();
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
    window.location.reload();
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
          <Input placeholder="Nome do Novo Membro" onChange={e => setName(e.target.value)} size="large" allowClear />
        </Col>
        <Col span={13} offset={4} style={style.item}>
          <Input placeholder="Email" onChange={e => setEmail(e.target.value)} size="large" tyoe='email' allowClear />
        </Col>
        <Col span={13} offset={4} style={style.item}>
          <Input placeholder="Senha" onChange={e => setPassword(e.target.value)} size="large" type='password' allowClear />
        </Col>
        <Col span={13} offset={4} style={style.item}>
          <Input placeholder="Departament" onChange={e => setDepartament(e.target.value)} size="large" allowClear />
        </Col>
        <Col span={13} offset={4} style={style.item}>
          <Select placeholder="Cadastrar como administrador" size="large" onChange={value =>setIsAdmin(value === 'true')} showArrow={true} style={{width: '100%'}}>
            <Option value={'false'} key={0}> {'Não'} </Option>
            <Option value={'true'} key={1}> {'Sim'} </Option>
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
