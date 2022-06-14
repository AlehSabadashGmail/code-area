import { Button } from 'antd'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextLocalStorage } from '../../../router/AppRotes'

export const HomePage = () => {
  const navigate = useNavigate()
  const setUsernameLocal = useContext(ContextLocalStorage)

  const LogOut = () => {
    if (setUsernameLocal) {
      setUsernameLocal(null)
      navigate('/')
    }
  }
  return (
    <div className="home-page">
      <Button onClick={LogOut}>Log out</Button>
    </div>
  )
}
