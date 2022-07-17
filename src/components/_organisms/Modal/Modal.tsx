import { Modal as FlowersModal } from 'antd'
import React from 'react'
import { Form } from '../Form'
import { ModalType } from './Modal.d'

export const Modal = ({
  visible,
  submit,
  handleCancel,
  form,
  onFinish,
}: ModalType) => {
  return (
    <FlowersModal
      visible={visible}
      onOk={submit}
      onCancel={handleCancel}
      title="Order"
    >
      <Form form={form} onFinish={onFinish} />
    </FlowersModal>
  )
}