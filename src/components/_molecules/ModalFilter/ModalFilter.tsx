import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { FilterOutlined } from '@ant-design/icons'

import './style.scss'
import { FormFilter } from '../../_organisms'
import { ModalFilterType } from './ModalFilterType'

export const ModalFilter = ({ ...props }: ModalFilterType): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button
        className="button-modal"
        onClick={showModal}
        icon={<FilterOutlined />}
      />
      <Modal
        title="Filter in table"
        visible={isModalVisible}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <FormFilter children={props.children} onClick={handleOk} />
      </Modal>
    </>
  )
}
