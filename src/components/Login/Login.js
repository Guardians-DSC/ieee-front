import React from 'react';
import { useState } from 'react';
import { Col, Input, Button } from 'antd';

import fieldsValidator from '../../Utils/fieldsValidator';
import style  from '../../Style/Style'

import { useSignDataContext } from '../../storage/context/SingInContext';

const Login = () => {  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { logIn } =  useSignDataContext();
  
  const handleLogin = () => {
    logIn({
      email: email,
      password: password
    });
  }

  const isUndefinedField = ( field ) => fieldsValidator.isUndefined( field ) ? true : false;
  const isEmptyField = ( field ) => fieldsValidator.isEmpty( field ) ? true : false;

  const validateFields = () => {
    const isEmailValid        = !isUndefinedField(email)        && !isEmptyField(email);
    const isPasswordValid     = !isUndefinedField(password)     && !isEmptyField(password);
    
    return ( isEmailValid && isPasswordValid );
  }

  return(
    <div style={style.container} >
      <div style={style.input}>
        <Col span={13} offset={4} style={style.inputHeader}> LOGIN </Col>
        <Col span={13} offset={4} style={style.item}>
          <Input placeholder="Email" onChange={e => setEmail(e.target.value)} type="email" size="large" allowClear />
        </Col>
        <Col span={13} offset={4} style={style.item}>
          <Input.Password placeholder="Password" onChange={e => setPassword(e.target.value)} type="email" size="large" allowClear/>
        </Col>
        <Col span={6} offset={4} style={style.item}>
          <Button  disabled={!validateFields()} type="primary" size="large" onClick={handleLogin} refresh="true">
            LogIn
          </Button>
        </Col>
      </div>
    </div>
  )
};

export default Login;