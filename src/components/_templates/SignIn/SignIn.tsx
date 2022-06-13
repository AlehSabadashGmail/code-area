import React, { useContext, useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Space, Typography } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import { RULES_FORM } from '../../../helper/helper'
import '../SignIn/style.scss'
import { loadUsersAsync } from '../../../redux/user/usersThunk'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { ContextLocalStorage } from '../../../router/AppRotes'

type FormData = {
  username: string
  password: string
}

export const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)

  useEffect(() => {
    dispatch(loadUsersAsync())
  }, [])

  const username = user.map((item) => item.user_name)
  const password = user.map((item) => item.password)

  const setUsernameLocal = useContext(ContextLocalStorage)

  const onFinish = (values: FormData) => {
    if (
      username.indexOf(values.username) > -1 &&
      password.indexOf(values.password) > -1
    ) {
      if (setUsernameLocal) {
        setUsernameLocal(values.username)
        navigate('/users')
      }
    } else {
      if (setUsernameLocal) {
        setUsernameLocal(null)
        alert('Вы не авторизованны')
      }
    }
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
