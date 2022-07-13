import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  notification,
  Select,
  Typography,
} from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  WifiOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
import './FlowersBooklet.scss'
import {
  useCardNumber,
  useCVCNumber,
  usePhoneNumber,
  useRequire,
} from 'src/rules'
import flowers from 'src/data/flowers.json'
import { FlowersData } from 'src/constants/Api/Flowers/flowers'

export const FlowersBooklet = () => {
  const [visible, setVisible] = useState(false)
  const { Option, OptGroup } = Select
  const [form] = Form.useForm()

  const showModal = () => {
    setVisible(true)
    form.resetFields()
  }

  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }

  const onFinish = (values: FlowersData) => {
    notification.open({
      message: `Your question has been sent: id: ${Math.random()
        .toString(36)
        .slice(2)}
        flower: ${values.flowers}
        your name: ${values.user_name}
        your email: ${values.user_email}
        your phone: ${values.user_phone}
        your card number: ${values.card_number}
        your card data: ${values.card_data}
        your card cvc: ${values.card_cvc}       
        recipient name: ${values.recipient_name}
        recipient email: ${values.recipient_email}
        recipient phone: ${values.recipient_phone}`,
    })
    setVisible(false)
  }
  return (
    <div className="booklet_wrapper">
      <div className="main">
        <div className="social">
          <Link to="/">
            <InstagramOutlined className="social_item" />
          </Link>
          <Link to="/">
            <TwitterOutlined className="social_item" />
          </Link>
          <Link to="/">
            <FacebookOutlined className="social_item" />
          </Link>
        </div>
        <div className="text">
          <Typography.Title level={1} className="text_main">
            Fast flower delivery in St. Petersburg
          </Typography.Title>
          <Typography.Title level={4} className="text_secondary">
            We will assemble and deliver it within an hour
          </Typography.Title>
          <Button className="button" onClick={showModal}>
            Choose a bouquet
          </Button>
        </div>
      </div>
      <div className="addition">
        <div className="addition_block">
          <WifiOutlined className="addition_item" />
          <div className="addition_block_text">
            Deliver free from 3000 for free
          </div>
        </div>
        <div className="addition_block">
          <SafetyCertificateOutlined className="addition_item" />
          <div className="addition_block_text">
            Daily delivery of fresh flowers
          </div>
        </div>
        <div className="addition_block">
          <ClockCircleOutlined className="addition_item" />
          <div className="addition_block_text">
            We work 24 hours seven days a week
          </div>
        </div>
      </div>
      <Modal
        visible={visible}
        onOk={form.submit}
        onCancel={handleCancel}
        title="Order"
      >
        <Form name="complex-form" form={form} onFinish={onFinish}>
          <Form.Item label="Flowers" name="flowers">
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
          </Form.Item>
          <div>Your details</div>
          <Form.Item label="Full Name" name="user_name" rules={[useRequire]}>
            <Input
              autoComplete="new-password"
              placeholder="Please input your full name"
            />
          </Form.Item>
          <Form.Item
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
          </Form.Item>
          <Form.Item label="Phone" name="user_phone" rules={[usePhoneNumber]}>
            <Input
              addonBefore="+375"
              autoComplete="new-password"
              placeholder="(XX) XXX-XXXX"
            />
          </Form.Item>
          <div>Payment</div>
          <Form.Item
            label="Card number"
            name="card_number"
            rules={[useCardNumber]}
          >
            <Input
              autoComplete="new-password"
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
          </Form.Item>
          <Form.Item label="Card data" name="card_data" rules={[useRequire]}>
            <DatePicker />
          </Form.Item>
          <Form.Item label="Card cvc" name="card_cvc" rules={[useCVCNumber]}>
            <Input autoComplete="new-password" placeholder="XXX" />
          </Form.Item>
          <div>Recipient's details</div>
          <Form.Item
            label="Full Name"
            name="recipient_full_name"
            rules={[useRequire]}
          >
            <Input
              autoComplete="new-password"
              placeholder="Please input your full name"
            />
          </Form.Item>
          <Form.Item
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
          </Form.Item>
          <Form.Item
            label="Phone"
            name="recipient_phone"
            rules={[usePhoneNumber]}
          >
            <Input
              addonBefore="+375"
              autoComplete="new-password"
              placeholder="Please input your phone"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
