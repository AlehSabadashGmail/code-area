import { Button, Form, Input, InputNumber, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { IUser } from 'src/redux/user/type'
import apiClient from 'src/helper/api'
import { FormData, initialData } from '../constants'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { loadUsersAsync } from 'src/redux/user/usersThunk'
import { Modal } from 'src/components/_atoms/Modal'
import './AddUsers.scss'
import { getIsLoading } from 'src/redux/user/selectors'
import { MODAL_TITLE } from './constants'
import { formRules } from './rules'

const { Option } = Select

export const AddUsers = () => {
  const dispatch = useAppDispatch()

  const { isLoading } = useAppSelector(getIsLoading)

  const [isModalOpen, setModalState] = useState(false)
  const [formValues, setFormValues] = useState<IUser | null>(null)
  const [isDisabled, setIsDisabled] = useState(false)

  const toggleModal = () => setModalState(!isModalOpen)
  const onClose = () => setModalState(false)

  const createUser = () => {
    apiClient()
      .post('users', formValues)
      .then(() => {
        dispatch(loadUsersAsync())
      })
  }

  const onFinish = (values: FormData) => {
    setFormValues(initialData(values))
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

  useEffect(() => {
    if (formValues) {
      createUser()
    }
  }, [formValues])

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
      <Button onClick={toggleModal}>Create user</Button>
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
            <Select disabled={isDisabled} placeholder="Select role">
              <Option value="Admin" children="admin" />
              <Option value="User" children="user" />
            </Select>
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
