import { Button, Checkbox, Form, Input, Space, Typography } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import { requestSignIn } from '../../../redux/users/action'
import { useAppDispatch } from '../../../redux/hooks'
import { RULES_FORM } from '../../../helper/helper'
import { SignInData } from './api'
import '../SignIn/style.scss'

type FormData = {
  username: string
  password: string
}

const prepareUser = (formData: FormData): SignInData => ({
  login: formData.username,
  password: formData.password,
})

export const SignIn = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onFinish = (values: FormData) => {
    dispatch(requestSignIn({ users: prepareUser(values) }))
    navigate('/users')
  }

  return (
    <Form<FormData>
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      className="signin-form"
    >
      <Typography className="main-label">SIGN IN</Typography>
      <Space direction="vertical" className="inputs-sign-in">
        <Form.Item
          label="Username"
          name="username"
          rules={[RULES_FORM.Username]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Enter username"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[RULES_FORM.Password]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Enter password"
            autoComplete="new-password"
          />
        </Form.Item>
      </Space>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
        className="remember-sign-up"
      >
        <Checkbox>Remember me</Checkbox>
        <a className="login-form-forgot">Forgot password</a>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className="sign-in-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}
