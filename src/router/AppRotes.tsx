import { Route, Routes } from 'react-router-dom'
import { HomePage } from 'src/components/_pages'
import { OrdersList } from 'src/components/_pages/OrdersList'
import { UserList } from 'src/components/_templates'
import { routes } from './Config/config.routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.default} element={<HomePage />} />
      <Route path={routes.usersList} element={<UserList />} />
      <Route path={routes.ordersList} element={<OrdersList />} />
    </Routes>
  )
}

export default AppRoutes
