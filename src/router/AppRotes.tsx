import { Route, Routes } from 'react-router-dom'
import { HomePage, UsersPage } from '../components/_pages'
import { routes } from './Config/config.routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.default} element={<HomePage />} />
      <Route path={routes.usersList} element={<UsersPage />} />
    </Routes>
  )
}

export default AppRoutes
