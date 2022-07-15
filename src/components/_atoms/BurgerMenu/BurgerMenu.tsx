import React from 'react'
import { Link } from 'react-router-dom'
import './BurgerMenu.scss'

interface IProps {
  active: boolean
}

export const BurgerMenu = ({ active }: IProps) => {
  return (
    <div className={active ? 'menu active' : 'menu'}>
      <div className="menu_content">
        <Link to={'/people'} className="link">
          People
        </Link>
      </div>
    </div>
  )
}
