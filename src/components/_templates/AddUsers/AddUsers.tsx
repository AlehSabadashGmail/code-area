import { Button, Form, Input, InputNumber, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { initialData } from '../constants'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { Modal } from 'src/components/_atoms/Modal'
import './AddUsers.scss'
import { MODAL_TITLE, OPTIONS } from './constants'
import { formRules } from './rules'
import { getIsLoading } from 'src/redux/users/selecor'
import { requestAddUsers } from 'src/redux/users/action'
import { FormData } from './apiType'

export const AddUsers = () => {
  const dispatch = useAppDispatch()

  const { isLoading } = useAppSelector(getIsLoading)

  const [isModalOpen, setModalState] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const toggleModal = () => setModalState(!isModalOpen)
  const onClose = () => setModalState(false)

  const onFinish = (values: FormData) => {
    dispatch(requestAddUsers({ users: initialData(values) }))
  }

  const loadingState = () => {
    if (isLoading && isModalOpen) {
      setIsDisabled(true)
    } else if (!isLoading && isModalOpen) {
      setModalState(false)
      setIsDisabled(false)
    }
  }

  useEffect(() => {
    loadingState()
  }, [isLoading])

  const {
    firstNameRules,
    lastNameRules,
    userNameRules,
    emailRules,
    roleRules,
    ageRule,
    passwordRule,
  } = formRules()

  return (
    <div>
      <Button onClick={toggleModal}>{MODAL_TITLE}</Button>
      <Modal title={MODAL_TITLE} isOpen={isModalOpen} onClose={toggleModal}>
        <Form name="complex-form" onFinish={onFinish}>
          <Form.Item
            label="First name"
            name="first_name"
            rules={[firstNameRules]}
          >
            <Input
              disabled={isDisabled}
              autoComplete="new-password"
              placeholder="Please input first name"
            />
          </Form.Item>
          <Form.Item label="Last name" name="last_name" rules={[lastNameRules]}>
            <Input
              disabled={isDisabled}
              autoComplete="new-password"
              placeholder="Please input last name"
            />
          </Form.Item>
          <Form.Item name="user_name" label="User name" rules={[userNameRules]}>
            <Input
              disabled={isDisabled}
              autoComplete="new-password"
              placeholder="Please input user name"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              emailRules,
            ]}
          >
            <Input
              placeholder="Please input email"
              autoComplete="new-password"
              disabled={isDisabled}
            />
          </Form.Item>
          <Form.Item label="Role" name="role" rules={[roleRules]}>
            <Select
              disabled={isDisabled}
              options={OPTIONS}
              placeholder="Select role"
            />
          </Form.Item>
          <Form.Item label="Age" name="age" rules={[ageRule]}>
            <InputNumber disabled={isDisabled} placeholder="Input age" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[passwordRule]}>
            <Input.Password
              autoComplete="new-password"
              disabled={isDisabled}
              placeholder="Input password"
            />
          </Form.Item>
          <Form.Item colon={false}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={onClose}>Cancel</Button>
      </Modal>
    </div>
  )
}
