import { Button, Form, notification, Typography } from 'antd'
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
import { FlowersData } from 'src/constants/Api/Flowers/flowers'
import { Modal } from 'src/components/_organisms'

export const FlowersBooklet = () => {
  const [visible, setVisible] = useState(false)
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
        submit={form.submit}
        form={form}
        visible={visible}
        handleCancel={handleCancel}
        onFinish={onFinish}
      />
    </div>
  )
}
