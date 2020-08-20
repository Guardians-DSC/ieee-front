import React from 'react';
import { useState } from 'react';
import { Col, Input, Select, TimePicker, InputNumber, DatePicker, Button } from 'antd';

import fieldsValidator from '../../Utils/fieldsValidator';
import SideBar from '../Sidebar/SideBar';
import style from '../../Style/Style'

import { useTaskDataContext } from '../../storage/context/TaskContext';
import { useNucleDataContext } from '../../storage/context/NucleContext';

const { TextArea } = Input;
const { Option } = Select;

const taskTypes = ['Reunião', 'Confraternização', 'Atividade', 'Técnica', 'Evento', 'Palestra', 'Workshop' , 'Competição'];
const timeFormat = 'HH:mm';
const dateFormat = 'DD-MM-YYYY';

const Register = () => {
  const { addTask } = useTaskDataContext();
  const [name, setName] = useState();
  const [nucle, setNucle] = useState();
  const [type, setType] = useState();
  const [workload, setWorkload] = useState();
  const [initialDate, setInitialDate] = useState();
  const [finalDate, setFinalDate] = useState();
  const [startTime, setStartTime] = useState();
  const [closingTime, setClosingTime] = useState();
  const [description, setDescription] = useState();
  
  //Create a nucle names options list
  const { getAllNucles, nucles } = useNucleDataContext();
  const NucleOptions = nucles.map(
    (nucleList, index) => (
      <Option value={nucleList.name} key={index}> {nucleList.name} </Option>
    )
  );

  //Create a task options list
  const TaskOptions = taskTypes.map(
    (taskType, index) => (
      <Option value={taskType} key={index}> {taskType} </Option>
    )
  );

  const handleSubmit = () => {
    addTask ({
      name: name,
      type: type,
      description: description,
      initialDate: initialDate,
      finalDate: finalDate,
      startTime: startTime,
      closingTime: closingTime,
      workload: workload,
      nucle: nucle
    });
    window.location.reload();
  }
  
  const isUndefinedField = ( field ) => fieldsValidator.isUndefined( field ) ? true : false;
  const isEmptyField = ( field ) => fieldsValidator.isEmpty( field ) ? true : false;

  const validateFields = () => {
    const isNameValid        = !isUndefinedField(name)        && !isEmptyField(name);
    const isNucleValid       = !isUndefinedField(nucle)       && !isEmptyField(nucle);
    const isTypeValid        = !isUndefinedField(type)        && !isEmptyField(type);
    const isWorkloadValid    = !isUndefinedField(workload)    && !isEmptyField(workload);
    const isIntialDateValid  = !isUndefinedField(initialDate) && !isEmptyField(initialDate);
    const isFinalDateValid   = !isUndefinedField(finalDate)   && !isEmptyField(finalDate);
    const isStartTimeValid   = !isUndefinedField(startTime)   && !isEmptyField(startTime);
    const isClosingTimeValid = !isUndefinedField(closingTime) && !isEmptyField(closingTime);
    const isDescriptionValid = !isUndefinedField(description) && !isEmptyField(description);
    
    return (
      isNameValid && isNucleValid && isTypeValid && isWorkloadValid && isIntialDateValid &&
      isFinalDateValid && isStartTimeValid && isClosingTimeValid && isDescriptionValid
    );
  }
  
  return(
    <div style={style.container} >
      <SideBar/>
      <div style={style.input}>
        <Col span={13} offset={4} style={style.inputHeader}> CADASTRO DE ATIVIDADE </Col>
        <Col span={13} offset={4} style={style.item}>
          <Input placeholder="Nome da Nova Atividade" onChange={e => setName(e.target.value)} size="large" allowClear />
        </Col>
        <Col span={13} offset={4} style={style.item}>
          <Select placeholder="Núcleo a qual pertence a atividade" onChange={value => setNucle(value)} size="large" value={nucle} showArrow={false} style={{width: '100%'}}>
            {getAllNucles()} 
            {NucleOptions}
          </Select>
        </Col>
        <Col span={6} offset={4} style={style.item}>
          <DatePicker placeholder="Data De Inicio" onChange={value => setInitialDate(value)} format={dateFormat} size="large" style={{width:'100%'}} />
        </Col>
        <Col span={6} offset={1} style={style.item}>
          <DatePicker placeholder="Data De Encerramento" onChange={value => setFinalDate(value)} format={dateFormat} size="large" style={{width:'100%'}} />
        </Col>
        <Col span={6} offset={4} style={style.item}>
          <TimePicker placeholder="Horário De Início" onChange={value => setStartTime(value)} format={timeFormat} size="large" style={{width:'100%'}}/>
        </Col>
        <Col span={6} offset={1} style={style.item}>
          <TimePicker placeholder="Horário De Encerramento" onChange={value => setClosingTime(value)} format={timeFormat} size="large" style={{width:'100%'}}/>
        </Col>
        <Col span={6} offset={4} style={style.item}>
          <InputNumber placeholder="Carga Horária" onChange={value => setWorkload(value)} size="large" Option min={1} style={{width:'100%'}}/>
        </Col>
        <Col span={6} offset={1} style={style.item}>
          <Select placeholder="Tipo da Atividade" onChange={value => setType(value)} size="large" value={type} showArrow={false} style={{width: '100%'}}>
            {TaskOptions}
          </Select>
        </Col>
        <Col span={13} offset={4} style={style.item}>
          <TextArea placeholder="Descrição da Atividade" onChange={e => setDescription(e.target.value)} autoSize={{minRows:4, maxRows:6}}/>
        </Col>
        <Col span={6} offset={4} style={style.item}>
          <Button  disabled={!validateFields()} type="primary" size="large" onClick={handleSubmit} refresh="true">
            Cadastrar
          </Button>
        </Col>
      </div>
    </div>
  )
}

export default Register;