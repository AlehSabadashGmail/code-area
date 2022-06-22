import { Button } from 'antd'

import { setLogin } from 'src/redux/reducers/usersSlice'
import { useAppDispatch } from 'src/redux/hooks'

export const HomePage = () => {
  const dispatch = useAppDispatch()

  const LogOut = () => {
    localStorage.clear()
    dispatch(setLogin(false))
    location.href = '/'
  }

  return (
    <div className="home-page">
      <Button onClick={LogOut}>Log out</Button>
    </div>
  )
}
