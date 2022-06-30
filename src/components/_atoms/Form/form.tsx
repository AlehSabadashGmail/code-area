import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd'
import { FromType } from './formType'
import { useRequireWithoutMessage } from 'src/rules'
import TextArea from 'antd/lib/input/TextArea'

export const FormDefault = ({ ...props }: FromType) => (
  <div>
    <Form form={props.form} onFinish={props.onFinish}>
      <Form.Item
        label="Product name"
        name="product_name"
        rules={[useRequireWithoutMessage]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[useRequireWithoutMessage]}>
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[useRequireWithoutMessage]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {props.submitButtonName}
        </Button>
      </Form.Item>
    </Form>
    <Button type="primary" htmlType="submit" onClick={props.onSubmit}>
      Cancel
    </Button>
  </div>
)
