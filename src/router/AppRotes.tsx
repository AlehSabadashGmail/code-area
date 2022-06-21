import { Route, Routes } from 'react-router-dom'
import { HomePage, OrdersList, UsersPage } from 'src/components/_pages'
import { routes } from './Config/config.routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.default} element={<HomePage />} />
      <Route path={routes.usersList} element={<UsersPage />} />
      <Route path={routes.ordersList} element={<OrdersList />} />
    </Routes>
  )
}

export default AppRoutes
