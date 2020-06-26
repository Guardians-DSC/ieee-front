import React from 'react';
import { useContext } from 'react';
import { Button, Form} from 'antd';
import { TaskContext } from '../../../../storage/context/TaskContext';

const FormItem = Form.Item;

const ModalDelete = ( ctask ) => {
  const { deleteTask } = useContext(TaskContext);

  const handleSubmit = () => {
    deleteTask(ctask.task._id)
  }

  return (
    <Form layout='inline' onSubmit={handleSubmit}>
      <FormItem >
        <Button type='danger' htmlType='submit' onClick={handleSubmit}>
          Sim, eu quero remover a atividade
        </Button>
      </FormItem>
    </Form>
  )
}

export default ModalDelete;
