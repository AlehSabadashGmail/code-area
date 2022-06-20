import { Route, Routes } from 'react-router-dom'
import { OrdersRoutes } from './OrdersRoutes'
import { HomePage, UserList } from 'src/components/_pages'
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
