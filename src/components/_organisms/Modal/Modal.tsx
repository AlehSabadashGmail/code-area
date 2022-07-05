import React from 'react'
import { Form, Input, InputNumber, Modal, Select } from 'antd'
import { ModalType } from './Modal.d'
import { useRequire } from 'src/rules'
import { OPTIONS } from 'src/constants'

export const ModalDefault: React.FC<ModalType> = ({ ...props }) => (
  <div>
    <Modal
      visible={props.visible}
      onOk={props.submit}
      onCancel={props.handleCancel}
      title={props.title}
    >
      <Form name="complex-form" form={props.form} onFinish={props.onFinish}>
        <Form.Item label="First name" name="first_name" rules={[useRequire]}>
          <Input
            disabled={props.isDisabled}
            autoComplete="new-password"
            placeholder="Please input first name"
          />
        </Form.Item>
        <Form.Item label="Last name" name="last_name" rules={[useRequire]}>
          <Input
            disabled={props.isDisabled}
            autoComplete="new-password"
            placeholder="Please input last name"
          />
        </Form.Item>
        <Form.Item name="user_name" label="User name" rules={[useRequire]}>
          <Input
            disabled={props.isDisabled}
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
            useRequire,
          ]}
        >
          <Input
            placeholder="Please input email"
            autoComplete="new-password"
            disabled={props.isDisabled}
          />
        </Form.Item>
        <Form.Item label="Role" name="role" rules={[useRequire]}>
          <Select
            disabled={props.isDisabled}
            options={OPTIONS}
            placeholder="Select role"
          />
        </Form.Item>
        <Form.Item label="Age" name="age" rules={[useRequire]}>
          <InputNumber disabled={props.isDisabled} placeholder="Input age" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[useRequire]}>
          <Input.Password
            autoComplete="new-password"
            disabled={props.isDisabled}
            placeholder="Input password"
          />
        </Form.Item>
      </Form>
    </Modal>
  </div>
)
