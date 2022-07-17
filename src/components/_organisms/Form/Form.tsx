import { DatePicker, Input, Select, Form as FlowersForm } from 'antd'
import React from 'react'
import flowers from 'src/data/flowers.json'
import {
  useCardNumber,
  useCVCNumber,
  usePhoneNumber,
  useRequire,
} from 'src/rules'
import { FormType } from './Form.d'

export const Form = ({ form, onFinish }: FormType) => {
  const { Option, OptGroup } = Select

  return (
    <FlowersForm name="complex-form" form={form} onFinish={onFinish}>
      <FlowersForm.Item label="Flowers" name="flowers">
        <Select placeholder="Choose a flower">
          <OptGroup label="Combined">
            {flowers.combined.map((flower) => (
              <Option key={flower.id} value={flower.name}>
                {flower.name}
              </Option>
            ))}
          </OptGroup>
          <OptGroup label="Wedding">
            {flowers.wedding.map((flower) => (
              <Option key={flower.id} value={flower.name}>
                {flower.name}
              </Option>
            ))}
          </OptGroup>
          <OptGroup label="Monobooks">
            {flowers.monobooks.map((flower) => (
              <Option key={flower.id} value={flower.name}>
                {flower.name}
              </Option>
            ))}
          </OptGroup>
          <OptGroup label="Compositions">
            {flowers.compositions.map((flower) => (
              <Option key={flower.id} value={flower.name}>
                {flower.name}
              </Option>
            ))}
          </OptGroup>
          <OptGroup label="Popular">
            {flowers.popular.map((flower) => (
              <Option key={flower.id} value={flower.name}>
                {flower.name}
              </Option>
            ))}
          </OptGroup>
        </Select>
      </FlowersForm.Item>
      <div>Your details</div>
      <FlowersForm.Item label="Full Name" name="user_name" rules={[useRequire]}>
        <Input
          autoComplete="new-password"
          placeholder="Please input your full name"
        />
      </FlowersForm.Item>
      <FlowersForm.Item
        label="Email"
        name="user_email"
        rules={[
          useRequire,
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
        ]}
      >
        <Input
          autoComplete="new-password"
          placeholder="Please input your email"
        />
      </FlowersForm.Item>
      <FlowersForm.Item
        label="Phone"
        name="user_phone"
        rules={[usePhoneNumber]}
      >
        <Input
          addonBefore="+375"
          autoComplete="new-password"
          placeholder="(XX) XXX-XXXX"
        />
      </FlowersForm.Item>
      <div>Payment</div>
      <FlowersForm.Item
        label="Card number"
        name="card_number"
        rules={[useCardNumber]}
      >
        <Input autoComplete="new-password" placeholder="XXXX-XXXX-XXXX-XXXX" />
      </FlowersForm.Item>
      <FlowersForm.Item label="Card data" name="card_data" rules={[useRequire]}>
        <DatePicker />
      </FlowersForm.Item>
      <FlowersForm.Item label="Card cvc" name="card_cvc" rules={[useCVCNumber]}>
        <Input autoComplete="new-password" placeholder="XXX" />
      </FlowersForm.Item>
      <div>Recipient's details</div>
      <FlowersForm.Item
        label="Full Name"
        name="recipient_full_name"
        rules={[useRequire]}
      >
        <Input
          autoComplete="new-password"
          placeholder="Please input your full name"
        />
      </FlowersForm.Item>
      <FlowersForm.Item
        label="Email"
        name="recipient_email"
        rules={[
          useRequire,
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
        ]}
      >
        <Input
          autoComplete="new-password"
          placeholder="Please input your email"
        />
      </FlowersForm.Item>
      <FlowersForm.Item
        label="Phone"
        name="recipient_phone"
        rules={[usePhoneNumber]}
      >
        <Input
          addonBefore="+375"
          autoComplete="new-password"
          placeholder="(XX) XXX-XXXX"
        />
      </FlowersForm.Item>
    </FlowersForm>
  )
}