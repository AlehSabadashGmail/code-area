import { Card, Typography } from 'antd'
import React, { useState } from 'react'
import {
  ClockCircleOutlined,
  PhoneOutlined,
  CarOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from '@ant-design/icons'

import './FlowersMapCard.scss'
import { Link } from 'react-router-dom'

export const FlowersMapCard = () => {
  return (
    <>
      <Card className="contact_card">
        <Typography.Title level={2} id="contacts">
          Contacts
        </Typography.Title>
        <div className="contacts_info">
          <CarOutlined className="contacts_icon" />
          <div className="contacts_item">
            <Typography.Title level={5}>Address</Typography.Title>
            <Typography.Text>Address</Typography.Text>
          </div>
        </div>
        <div className="contacts_info">
          <ClockCircleOutlined className="contacts_icon" />
          <div className="contacts_item">
            <Typography.Title level={5}>Work schedule</Typography.Title>
            <Typography.Text>Mon-Sun: around the clock</Typography.Text>
          </div>
        </div>
        <div className="contacts_info">
          <PhoneOutlined className="contacts_icon" />
          <div className="contacts_item">
            <Typography.Title level={5}>Telephone</Typography.Title>
            <Typography.Text>8(900)663-32-92</Typography.Text>
          </div>
        </div>
        <div>
          <Link to="/">
            <InstagramOutlined className="social_icon" />
          </Link>
          <Link to="/">
            <TwitterOutlined className="social_icon" />
          </Link>
          <Link to="/">
            <FacebookOutlined className="social_icon" />
          </Link>
        </div>
      </Card>
    </>
  )
}
