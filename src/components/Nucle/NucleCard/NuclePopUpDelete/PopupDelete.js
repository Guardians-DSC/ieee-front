import React from 'react'
import { Modal, Button } from 'antd';
import ModalDelete from './ModalDelete';

const PopupDelete = e => {

  if (!e.openPopup)
      return null
    
  return (
    <div>
      <Modal 
        visible={true}
        title="Remover Núcleo"
        onOk={e.onClose}
        onCancel={e.onClose}
        style={{top:'5rem'}}
        footer={
          <Button type='submit' onClick={e.onClose}>
            Voltar
          </Button>
          }
        >
          <ModalDelete nucle={e.nucle}/>
      </Modal>
    </div>
  )
}

export default PopupDelete;
