import { Route, Routes } from 'react-router-dom'
import { HomePage, UserList } from '../components/_pages'
import { Order } from '../components/_pages/Order'
import { OrdersRoutes } from '../components/_templates/Orders/OrdersRoutes'
import { routes } from './Config/config.routes'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.default} element={<HomePage />} />
        <Route path={routes.usersList} element={<UserList />} />
      </Routes>
      <OrdersRoutes />
    </>
  )
}

export default AppRoutes
