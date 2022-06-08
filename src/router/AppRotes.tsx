import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../feature/HomePage'
import { SignIn } from '../feature/SignIn/SignIn'
import { UserList } from '../feature/UserList'
import { routes } from './Config/config.routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.default} element={<HomePage />} />
      <Route path={routes.usersList} element={<UserList />} />
      <Route path={routes.signIn} element={<SignIn />} />
    </Routes>
  )
}

export default AppRoutes
