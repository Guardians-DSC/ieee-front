import React from 'react';
import { useContext } from 'react';
import { Button, Form} from 'antd';
import { NucleContext } from '../../../../storage/context/NucleContext';

const FormItem = Form.Item;

const ModalDelete = ( cnucle ) => {
  const { deleteNucle } = useContext(NucleContext);

  const handleSubmit = () => {
    deleteNucle(cnucle.nucle.name)
  }

  return (
    <Form layout='inline' onSubmit={handleSubmit}>
      <FormItem >
        <Button type='danger' htmlType='submit' onClick={handleSubmit}>
          Sim, eu quero remover o núcleo
        </Button>
      </FormItem>
    </Form>
  )
}

export default ModalDelete;
