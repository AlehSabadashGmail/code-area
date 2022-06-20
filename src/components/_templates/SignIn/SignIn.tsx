import { Button, Checkbox, Form, Input, Space, Typography } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import { requestSignIn } from '../../../redux/users/action'
import { useAppDispatch } from '../../../redux/hooks'
import { RULES_FORM } from '../../../helper/helper'
import { UtilsSignIn } from '../../../utils'
import '../SignIn/style.scss'
import { FormDataSigIn } from '.'
import { FORGOT_PASSWORD, REMEMBER_ME, SIGN_IN } from '../../../constants'

export const SignIn = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onFinish = (values: FormDataSigIn) => {
    dispatch(requestSignIn({ users: UtilsSignIn(values) }))
    navigate('/users')
  }

  return (
    <Form<FormDataSigIn>
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      className="signin-form"
    >
      <Typography className="main-label">{SIGN_IN}</Typography>
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
        <Checkbox>{REMEMBER_ME}</Checkbox>
        <a className="login-form-forgot">{FORGOT_PASSWORD}</a>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className="sign-in-button">
          {SIGN_IN}
        </Button>
      </Form.Item>
    </Form>
  )
}
