import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()

  const LogOut = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className="home-page">
      <Button onClick={LogOut}>Log out</Button>
    </div>
  )
}
