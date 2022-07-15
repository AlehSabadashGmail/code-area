import { Anchor, Typography } from 'antd'
import React from 'react'
import './FlowersHeader.scss'
import { PhoneOutlined } from '@ant-design/icons'
import logo from 'src/image/logo.png'

export const FlowersHeader = () => {
  const { Link } = Anchor
  return (
    <Anchor className="anchor">
      <div className="logo">
        <img src={logo} />
      </div>
      <Link href="#catalog" title="Catalog" className="link" />
      <Link href="#feedback" title="Feedback" className="link" />
      <Link href="#contacts" title="Contacts" className="link" />
      <div className="phone">
        <PhoneOutlined className="phone_image" />
        <Typography.Text copyable className="copy">
          8(900)663-32-92
        </Typography.Text>
      </div>
    </Anchor>
  )
}
