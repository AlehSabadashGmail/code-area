import React from 'react'
import { Button, Form, Input, InputNumber, Select } from 'antd'

import './style.scss'
import { OPTIONS, RULES_FORM } from '../../../helper/helper'

type FormData = {
  fullname: string
  username: string
  first_name: string
  role: {}
  age: number
  email: string
  phone: string
}

export const FormFilter: React.FC = () => {
  const onFinish = (values: FormData) => {
    console.log('Success:', values)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      size="middle"
      className="form-filter"
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        label="Full name"
        rules={[
          {
            pattern: new RegExp(/^[a-z ,.'-]+$/i),
            message: 'Name and surname entered incorrectly',
          },
        ]}
        name="fullname"
      >
        <Input type="text" placeholder="Enter full name" maxLength={50} />
      </Form.Item>
      <Form.Item label="Username" name="username">
        <Input type="text" placeholder="Enter username" maxLength={50} />
      </Form.Item>
      <Form.Item
        label="First name"
        rules={[
          {
            pattern: new RegExp(/^[A-ZА-ЯЁ]+$/i),
            message: 'Name entered incorrectly',
          },
        ]}
        name="first_name"
      >
        <Input type="text" placeholder="Enter first name" maxLength={50} />
      </Form.Item>
      <Form layout="inline">
        <Form.Item label="Role" name="role">
          <Select options={OPTIONS} placeholder="Select role" />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <InputNumber min={16} max={99} />
        </Form.Item>
      </Form>
      <Form.Item
        label="Email"
        rules={[
          {
            pattern: new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
            message: 'Email entered incorrectly',
          },
        ]}
        name="email"
      >
        <Input placeholder="Enter email" />
      </Form.Item>
      <Form.Item
        label="Phone"
        rules={[
          {
            // pattern: new RegExp(
            //   /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
            // ),
            message: 'Phone entered incorrectly',
          },
        ]}
        name="phone"
      >
        <Input placeholder="Enter phone" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className="sign-in-button">
          Search
        </Button>
      </Form.Item>
    </Form>
  )
}
