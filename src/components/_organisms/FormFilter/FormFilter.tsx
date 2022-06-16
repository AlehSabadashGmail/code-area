import React from 'react'
import { Button, Form, Input, InputNumber, Select } from 'antd'

import './style.scss'
import { OPTIONS, RULES_FORM_FILTER } from '../../../helper/helper'
import { FormDataFilters, FormFilterType } from './FormFilterType'
import { useAppDispatch } from '../../../redux/hooks'
import { setFilteredUsers } from '../../../redux/reducers/userSlice'
import { filterFunction } from './constans'

export const FormFilter = ({ ...props }: FormFilterType): JSX.Element => {
  const dispatch = useAppDispatch()

  const onFinish = (values: FormDataFilters) => {
    const newUsers = filterFunction.reduce(
      (acc, filters) => filters(acc, values),
      props.children,
    )
    dispatch(setFilteredUsers(newUsers))
  }

  return (
    <Form<FormDataFilters>
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      size="middle"
      className="form-filter"
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Full name"
        rules={[RULES_FORM_FILTER.Fullname]}
        name="fullname"
      >
        <Input type="text" placeholder="Enter full name" maxLength={50} />
      </Form.Item>
      <Form.Item label="Username" name="username">
        <Input type="text" placeholder="Enter username" maxLength={50} />
      </Form.Item>
      <Form.Item
        label="First name"
        rules={[RULES_FORM_FILTER.First_name]}
        name="first_name"
      >
        <Input type="text" placeholder="Enter first name" maxLength={50} />
      </Form.Item>
      <Form.Item label="Role" name="role">
        <Select options={OPTIONS} placeholder="Select role" />
      </Form.Item>
      <Form.Item name="age" label="Age">
        <InputNumber min={16} max={99} type="number" />
      </Form.Item>
      <Form.Item label="Email" rules={[RULES_FORM_FILTER.Email]} name="email">
        <Input placeholder="Enter email" />
      </Form.Item>
      <Form.Item label="Phone" rules={[RULES_FORM_FILTER.Phone]} name="phone">
        <Input placeholder="Enter phone" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          className="sign-in-button"
          onClick={props.onClick}
        >
          Search
        </Button>
      </Form.Item>
    </Form>
  )
}
