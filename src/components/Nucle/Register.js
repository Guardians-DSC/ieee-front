import React from 'react';
import {useState} from 'react';
import { Col, Input, Button } from 'antd';import 'antd/dist/antd.css';

import fieldsValidator from '../../Utils/fieldsValidator';
import SideBar from '../Sidebar/SideBar';
import style from '../../Style/Style'

import { useNucleDataContext } from '../../storage/context/NucleContext';

const Register = () => {
  const { addNucle } = useNucleDataContext();
  const [name, setName] = useState();
  
  const handleSubmit = () => {
    addNucle ({
      name: name
    });
    window.location.reload();
  }

  const isUndefinedField = ( field ) => fieldsValidator.isUndefined( field ) ? true : false;
  const isEmptyField = ( field ) => fieldsValidator.isEmpty( field ) ? true : false;

  const validateFields = () => {
    const isNameValid = !isUndefinedField(name) && !isEmptyField(name);
    return (isNameValid);
  }

  return(
    <div style={style.container} >
      <SideBar/>
      <div style={style.input}>
        <Col span={13} offset={4} style={style.inputHeader}> CADASTRO DE NUCLEO </Col>
        <Col span={13} offset={4} style={style.item}>
          <Input placeholder="Nome do Novo Núcleo" onChange={e => setName(e.target.value)} size="large" allowClear />
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
