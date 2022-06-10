import { Button, Form, Input, InputNumber, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { Modal } from '_atoms/Modal'
import './addUsers.scss'
import { IUser } from 'store/user/type'
import apiClient from 'helper/api'
import { useAppDispatch, useAppSelector } from 'hooks'
import { loadUsersAsync } from 'store/user/usersThunk'
import { FormData, initialData } from '../constants'

const { Option } = Select

export const AddUser = () => {
  const dispatch = useAppDispatch()

  const { isLoading } = useAppSelector((state) => state.user)

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

  useEffect(() => {
    if (isLoading && isModalOpen) {
      setIsDisabled(true)
    } else if (!isLoading && isModalOpen) {
      setModalState(false)
      setIsDisabled(false)
    }
  }, [isLoading])

  useEffect(() => {
    if (formValues) {
      createUser()
    }
  }, [formValues])

  return (
    <div>
      <Button onClick={toggleModal}>Create user</Button>
      <Modal title={'Create user'} isOpen={isModalOpen} onClose={toggleModal}>
        <Form name="complex-form" onFinish={onFinish}>
          <Form.Item
            label="First name"
            name="first_name"
            rules={[
              {
                required: true,
                message: 'First name is required',
              },
            ]}
          >
            <Input
              disabled={isDisabled}
              autoComplete="new-password"
              placeholder="Please input first name"
            />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="last_name"
            rules={[
              {
                required: true,
                message: 'Last name is required',
              },
            ]}
          >
            <Input
              disabled={isDisabled}
              autoComplete="new-password"
              placeholder="Please input last name"
            />
          </Form.Item>
          <Form.Item
            name="user_name"
            label="User name"
            rules={[
              {
                required: true,
                message: 'User name is required',
              },
            ]}
          >
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
              {
                required: true,
                message: 'Please input your e-mail!',
              },
            ]}
          >
            <Input
              placeholder="Please input email"
              autoComplete="new-password"
              disabled={isDisabled}
            />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[
              {
                required: true,
                message: 'Role is required',
              },
            ]}
          >
            <Select disabled={isDisabled} placeholder="Select role">
              <Option value="Admin">admin</Option>
              <Option value="User">user</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: 'Age is required',
              },
            ]}
          >
            <InputNumber disabled={isDisabled} placeholder="Input age" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input password',
              },
            ]}
          >
            <Input.Password
              autoComplete="new-password"
              disabled={isDisabled}
              placeholder="Input password"
            />
          </Form.Item>
          <Form.Item label=" " colon={false}>
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
