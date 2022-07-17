import { Anchor } from 'antd'
import React from 'react'
import './FlowersHeader.scss'
import { PhoneOutlined } from '@ant-design/icons'
import logo from 'src/image/logo.png'

export const FlowersHeader = () => {
  const { Link } = Anchor
  return (
    <Anchor affix={false} className="anchor">
      <div className="logo">
        <img src={logo} />
      </div>
      <Link href="#catalog" title="Catalog" className="link" />
      <Link href="#questions" title="Questions" className="link" />
      <div className="phone">
        <PhoneOutlined className="phone_image" />
        <div>8(900)663-32-92</div>
      </div>
    </Anchor>
  )
}
