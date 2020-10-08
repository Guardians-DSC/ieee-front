import * as React from 'react';
import { useState, useContext } from 'react';
import { Form, Input, Card, Button } from 'antd';

import fieldsValidator from '../../../../Utils/fieldsValidator';
import { NucleContext } from '../../../../storage/context/NucleContext';

const FormItem = Form.Item;

const ModalEdit = ( cnucle ) => {
  const { setNucle } = useContext(NucleContext);
  const [newName, setnewName] = useState(cnucle.nucle.name);

  const handleSubmit = () => {
    setNucle ({
      name: cnucle.nucle.name,
      newName: newName
    }); 
    window.location.reload();
  }

  const isUndefinedField = ( field ) => fieldsValidator.isUndefined( field ) ? true : false;
  const isEmptyField = ( field ) => fieldsValidator.isEmpty( field ) ? true : false;

  const validateFields = () => {
    const isNameValid = !isUndefinedField(newName) && !isEmptyField(newName);
    
    return ( isNameValid );
  }

  return (
    <Card>
      <Form layout="vertical" onSubmit={handleSubmit}>
        <FormItem>
          <Input placeholder="Nome do Núcleo" defaultValue={newName} onChange={e => setnewName(e.target.value)} size="large" allowClear />
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
