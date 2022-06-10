import { Route, Routes } from 'react-router-dom'
import { HomePage, UserList } from '../components/_pages'
import { SignIn } from '../feature/SignIn/SignIn'
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
