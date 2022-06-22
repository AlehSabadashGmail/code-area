import { Route, Routes } from 'react-router-dom'
import {
  HomePage,
  OrdersList,
  SignInPage,
  UsersPage,
} from 'src/components/_pages'
import { routes } from './Config/config.routes'
import { PrivateRoute } from './PrivateRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.default} element={<SignInPage />} />
      <Route
        path={routes.homepage}
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.usersList}
        element={
          <PrivateRoute>
            <UsersPage />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.ordersList}
        element={
          <PrivateRoute>
            <OrdersList />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}
export default AppRoutes
