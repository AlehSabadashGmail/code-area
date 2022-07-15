import { Anchor } from 'antd'
import React, { useState } from 'react'
import './FlowersHeader.scss'
import { PhoneOutlined } from '@ant-design/icons'
import logo from 'src/image/logo.png'
import { BurgerMenu } from 'src/components/_atoms'

export const FlowersHeader = () => {
  const { Link } = Anchor
  const [menuOpen, setMenuOpen] = useState(false)

  const showMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Anchor className="anchor">
        <div className="burger_wrapper">
          <div className="burger" onClick={showMenu}>
            <span />
          </div>
        </div>
        <div className="logo">
          <img src={logo} />
        </div>
        <Link href="#catalog" title="Catalog" className="link" />
        <Link href="#feedback" title="Feedback" className="link" />
        <Link href="#" title="Delivery and payment" className="link" />
        <Link href="#" title="Contacts" className="link" />
        <div className="phone">
          <PhoneOutlined className="phone_image" />
          <div>8(900)663-32-92</div>
        </div>
      </Anchor>
      <BurgerMenu active={menuOpen} />
    </>
  )
}
