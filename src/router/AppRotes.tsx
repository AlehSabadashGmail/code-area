import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../feature/HomePage'
import UserList from '../feature/UserList'
import { routes } from './Config/config.routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.homePage} element={<HomePage />} />
      <Route path={routes.usersList} element={<UserList />} />
    </Routes>
  )
}

export default AppRoutes
