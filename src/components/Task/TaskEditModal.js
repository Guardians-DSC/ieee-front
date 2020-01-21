import React, {useEffect} from 'react'
import {Modal} from 'antd';
import TaskRegister from './TaskRegister';
import axios from 'axios';
import { OmitProps } from 'antd/lib/transfer/renderListBody';


const url = 'http://localhost:8080/task'
const TaskEditModal = (props) => {
const {show, onClose, isEdition, id, title, description} = props;

    return show && (
        <div>
            <Modal
                visible={true}
                title='Editar Atividade'
                onOk={onClose}
                onCancel={onClose}
            >
                <TaskRegister isEdition id title description />
            </Modal>
        </div>
    )
};

export default TaskEditModal;