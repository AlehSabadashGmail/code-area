import { Button, Typography } from 'antd'
import React from 'react'
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

export const FlowersBooklet = () => {
  return (
    <div className="wrapper">
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
          <Button className="button">Choose a bouquet</Button>
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
    </div>
  )
}
