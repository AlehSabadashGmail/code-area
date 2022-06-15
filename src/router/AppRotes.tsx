import { Route, Routes } from 'react-router-dom'
import { HomePage, Order, UserList } from '../components/_pages'
import { routes } from './Config/config.routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.default} element={<HomePage />} />
      <Route path={routes.usersList} element={<UserList />} />
      <Route path={routes.ordersList} element={<Order />} />
    </Routes>
  )
}

export default AppRoutes
