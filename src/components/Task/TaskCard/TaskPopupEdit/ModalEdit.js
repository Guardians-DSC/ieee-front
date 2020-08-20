import * as React from 'react';
import { useState, useContext } from 'react';
import { Form,  Input, InputNumber, DatePicker, TimePicker, Select, Card, Button } from 'antd';
import moment from 'moment';

import fieldsValidator from '../../../../Utils/fieldsValidator';
import { TaskContext } from '../../../../storage/context/TaskContext';

const { Option } = Select;
const FormItem = Form.Item;
const {TextArea} = Input;

const timeFormat = 'HH:mm';
const dateFormat = 'DD-MM-YYYY';
const taskTypes = ['Reunião', 'Confraternização', 'Atividade', 'Técnica', 'Evento', 'Palestra', 'Workshop' , 'Competição'];

const ModalEdit = ( ctask ) => {
  const taskId = ctask.task._id;
  const { setTask } = useContext(TaskContext);
  const [name, setName] = useState(ctask.task.name);
  const [nucle, setNucle] = useState(ctask.task.nucle);
  const [type, setType] = useState(ctask.task.type);
  const [workload, setWorkload] = useState(ctask.task.workload);
  const [initialDate, setInitialDate] = useState(ctask.task.initialDate);
  const [finalDate, setFinalDate] = useState(ctask.task.finalDate);
  const [startTime, setStartTime] = useState(ctask.task.startTime);
  const [closingTime, setClosingTime] = useState(ctask.task.closingTime);
  const [description, setDescription] = useState(ctask.task.description);

  const handleSubmit = () => {
    setTask ({
      name: name,
      type: type,
      description: description,
      initialDate: initialDate,
      finalDate: finalDate,
      startTime: startTime,
      closingTime: closingTime,
      workload: workload,
      nucle: nucle,
      _id: taskId
    }); 
    window.location.reload();
  }

  const isUndefinedField = ( field ) => fieldsValidator.isUndefined( field ) ? true : false;
  const isEmptyField = ( field ) => fieldsValidator.isEmpty( field ) ? true : false;

  const validateFields = () => {
    const isNameValid        = !isUndefinedField(name)        && !isEmptyField(name);
    const isTypeValid        = !isUndefinedField(type)        && !isEmptyField(type);
    const isWorkloadValid    = !isUndefinedField(workload)    && !isEmptyField(workload);
    const isIntialDateValid  = !isUndefinedField(initialDate) && !isEmptyField(initialDate);
    const isFinalDateValid   = !isUndefinedField(finalDate)   && !isEmptyField(finalDate);
    const isStartTimeValid   = !isUndefinedField(startTime)   && !isEmptyField(startTime);
    const isClosingTimeValid = !isUndefinedField(closingTime) && !isEmptyField(closingTime);
    const isDescriptionValid = !isUndefinedField(description) && !isEmptyField(description);
    
    return (
      isNameValid && isTypeValid && isWorkloadValid && isIntialDateValid &&
      isFinalDateValid && isStartTimeValid && isClosingTimeValid && isDescriptionValid
    );
  }

  const TaskOptions = taskTypes.map(
    (taskType, index) => (
      <Option value={taskType} key={index}> {taskType} </Option>
    )
  );

  return (
    <Card>
      <Form layout="vertical" onSubmit={handleSubmit}>
        <FormItem>
          <Input placeholder="Nome da Atividade" defaultValue={name} onChange={e => setName(e.target.value)} size="large" allowClear />
        </FormItem>
        <FormItem>
          <Input placeholder="Núcleo a qual pertence a atividade" defaultValue={nucle} onChange={e => setNucle(e.target.value)} size="large" allowClear />
        </FormItem>
        <FormItem>                            
          <DatePicker placeholder="Data De Inicio" defaultValue={moment(initialDate)} onChange={value => setInitialDate(value)}  format={dateFormat} size="large" style={{width:'100%'}} />
        </FormItem>
        <FormItem>
          <DatePicker placeholder="Data De Encerramento" defaultValue={moment(finalDate)} onChange={value => setFinalDate(value)} format={dateFormat} size="large" style={{width:'100%'}} />
        </FormItem>
        <FormItem>                            
          <TimePicker placeholder="Horário De Início" defaultValue={moment(startTime)} onChange={value => setStartTime(value)} format={timeFormat} size="large" style={{width:'100%'}}/>
        </FormItem>
        <FormItem>
          <TimePicker placeholder="Horário De Encerramento" defaultValue={moment(closingTime)} onChange={value => setClosingTime(value)} format={timeFormat} size="large" style={{width:'100%'}}/>
        </FormItem>
        <FormItem>
          <InputNumber placeholder="Carga Horária" defaultValue={workload} onChange={value => setWorkload(value)} size="large" Option min={1} style={{width:'100%'}}/>
        </FormItem>
        <FormItem>
          <Select placeholder="Tipo da Atividade" defaultValue={type} onChange={value => setType(value)} size="large" value={type} showArrow={false} style={{width: '100%'}}>
            {TaskOptions}
          </Select>                
        </FormItem>
        <FormItem>
          <TextArea placeholder="Descrição da Atividade" defaultValue={description} onChange={e => setDescription(e.target.value)} autoSize={{minRows:4, maxRows:6}}/>
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
