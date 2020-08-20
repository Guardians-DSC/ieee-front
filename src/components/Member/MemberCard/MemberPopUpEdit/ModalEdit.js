import * as React from 'react';
import { useState, useContext } from 'react';
import { Form, Input, Card, Button, Select } from 'antd';

import fieldsValidator from '../../../../Utils/fieldsValidator';
import { UserContext } from '../../../../storage/context/UserContext';

const FormItem = Form.Item;
const { Option } = Select;

const ModalEdit = ( cuser ) => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState(cuser.user.name);
  const [department, setDepartment] = useState(cuser.user.department);
  const [isAdmin, setIsAdmin] = useState(cuser.user.isAdmin);

  const handleSubmit = () => {
    setUser ({
      name: name,
      department: department,
      isAdmin: isAdmin,
      email: cuser.user.email,
      password: cuser.user.password
    }); 
    window.location.reload();
  }

  const isUndefinedField = ( field ) => fieldsValidator.isUndefined( field ) ? true : false;
  const isEmptyField = ( field ) => fieldsValidator.isEmpty( field ) ? true : false;

  const validateFields = () => {
    const isNameValid         = !isUndefinedField(name)        && !isEmptyField(name);    
    const isDepartmentValid   = !isUndefinedField(department) && !isEmptyField(department);
    const isAdminValid        = !isUndefinedField(isAdmin)     && !isEmptyField(isAdmin);

    return ( isNameValid && isDepartmentValid && isAdminValid );
  }

  return (
    <Card>
      <Form layout="vertical" onSubmit={handleSubmit}>
        <FormItem>
          <Input placeholder="Nome da membro" defaultValue={name} onChange={e => setName(e.target.value)} size="large" allowClear />
        </FormItem>
        <FormItem>
          <Input placeholder="Departamento" defaultValue={department} onChange={e => setDepartment(e.target.value)} size="large" allowClear />
        </FormItem>
        <FormItem>
          <Select placeholder="É administrador" defaultValue={isAdmin ? "Sim" : "Não"} onChange={value =>setIsAdmin(value === 'true')} size="large" allowClear showArrow={true} style={{width: '100%'}}>
            <Option value={'false'} key={0}> {'Não'} </Option>
            <Option value={'true'} key={1}> {'Sim'} </Option>
          </Select>  
        </FormItem>
        <FormItem>
          <Button  disabled={!validateFields()} type="primary" size="large" onClick={handleSubmit} refresh="true">
            Atualizar
          </Button>
        </FormItem>
      </Form>
    </Card>
  );
}

export default ModalEdit;
