import { Button, Modal } from 'antd'
import React, { ReactNode, useState } from 'react'
import './Modal.scss'

interface ModalProps {
  title: string
  buttonText: string
  children: ReactNode
}

export const ModalDefault = ({ buttonText, title, children }: ModalProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {buttonText}
      </Button>
      <Modal title={title} visible={isModalVisible} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  )
}
