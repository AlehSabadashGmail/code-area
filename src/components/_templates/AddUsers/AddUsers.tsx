import { Form, Input, InputNumber, Select, Modal, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { FormData } from 'src/constants/Api/Users/api'
import { useRequire } from 'src/rules'
import { UtilsAddUsers } from 'src/utils/UsersUtils'
import { CONSTANTS_TEXT, OPTIONS } from 'src/constants'
import { requestAddUsers } from 'src/redux/users/action'
import { getIsLoading } from 'src/redux/users/selectors'

export const AddUsers = () => {
  const dispatch = useAppDispatch()

  const { isLoading } = useAppSelector(getIsLoading)

  const [isDisabled, setIsDisabled] = useState(false)
  const [visible, setVisible] = useState(false)

  const [form] = Form.useForm()

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }

  const onFinish = (values: FormData) => {
    dispatch(requestAddUsers({ users: UtilsAddUsers(values) }))
  }

  const loadingState = () => {
    if (isLoading && visible) {
      setIsDisabled(true)
    } else if (!isLoading && visible) {
      setVisible(false)
      setIsDisabled(false)
      form.resetFields()
    }
  }

  useEffect(() => {
    loadingState()
  }, [isLoading])

  const require = useRequire()

  return (
    <div>
      <Button onClick={showModal}>{CONSTANTS_TEXT.CREATE_USERS}</Button>
      <Modal
        visible={visible}
        onOk={form.submit}
        onCancel={handleCancel}
        title={CONSTANTS_TEXT.CREATE_USERS}
      >
        <Form name="complex-form" form={form} onFinish={onFinish}>
          <Form.Item label="First name" name="first_name" rules={[require]}>
            <Input
              disabled={isDisabled}
              autoComplete="new-password"
              placeholder="Please input first name"
            />
          </Form.Item>
          <Form.Item label="Last name" name="last_name" rules={[require]}>
            <Input
              disabled={isDisabled}
              autoComplete="new-password"
              placeholder="Please input last name"
            />
          </Form.Item>
          <Form.Item name="user_name" label="User name" rules={[require]}>
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
              require,
            ]}
          >
            <Input
              placeholder="Please input email"
              autoComplete="new-password"
              disabled={isDisabled}
            />
          </Form.Item>
          <Form.Item label="Role" name="role" rules={[require]}>
            <Select
              disabled={isDisabled}
              options={OPTIONS}
              placeholder="Select role"
            />
          </Form.Item>
          <Form.Item label="Age" name="age" rules={[require]}>
            <InputNumber disabled={isDisabled} placeholder="Input age" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[require]}>
            <Input.Password
              autoComplete="new-password"
              disabled={isDisabled}
              placeholder="Input password"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
