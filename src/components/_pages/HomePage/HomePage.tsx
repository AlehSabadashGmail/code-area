import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { routes } from 'src/router/Config/config.routes'

export const HomePage = () => {
  const navigate = useNavigate()
  const LogOut = () => {
    localStorage.clear()
    navigate(routes.default)
  }

  return (
    <div className="home-page">
      <Button onClick={LogOut}>Log out</Button>
    </div>
  )
}
