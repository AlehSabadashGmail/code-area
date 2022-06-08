import { Button, Checkbox, Form, Input, Space, Typography } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { RULES_FORM } from '../../helper/helper'
import '../SignIn/style.scss'
import { IUser, IUserState } from '../../store/user/type'

type FormData = {
  email: string
  password: string
}

// const prepareUser = (formData: FormData): IUserState => ({
//   email: formData.address,
//   password: formData.password,
// })

export const SignIn = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <Form
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
