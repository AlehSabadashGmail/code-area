import { Route, Routes } from 'react-router-dom'
import { OrdersRoutes } from '../components/_templates/Orders/OrdersRoutes'
import { HomePage, UserList, OrdersList } from 'src/components/_pages'
import { routes } from './Config/config.routes'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.default} element={<HomePage />} />
        <Route path={routes.usersList} element={<UserList />} />
        <Route path={routes.ordersList} element={<OrdersList />} />
      </Routes>
      <OrdersRoutes />
    </>
  )
}

export default AppRoutes
