import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd'
import { FormType } from './formType'
import { useRequireWithoutMessage, useRequirePositiveNumber } from 'src/rules'

export const FormDefault: React.FC<FormType> = ({ ...props }) => (
  <div>
    <Form form={props.form} onFinish={props.onFinish}>
      <Form.Item
        label="Product name"
        name="product_name"
        rules={[useRequireWithoutMessage]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[useRequirePositiveNumber]}>
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[useRequireWithoutMessage]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {props.submitButtonName}
        </Button>
      </Form.Item>
    </Form>
    <Button type="primary" onClick={props.onClick}>
      Cancel
    </Button>
  </div>
)
