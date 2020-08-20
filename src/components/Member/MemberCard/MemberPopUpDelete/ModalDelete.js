import React from 'react';
import { useContext } from 'react';
import { Button, Form} from 'antd';
import { UserContext } from '../../../../storage/context/UserContext';

const FormItem = Form.Item;

const ModalDelete = ( cuser ) => {
  const { deleteUser } = useContext(UserContext);

  const handleSubmit = () => {
    deleteUser(cuser.user.email)
  }

  return (
    <Form layout='inline' onSubmit={handleSubmit}>
      <FormItem >
        <Button type='danger' htmlType='submit' onClick={handleSubmit}>
          Sim, eu quero remover esse membro
        </Button>
      </FormItem>
    </Form>
  )
}

export default ModalDelete;
