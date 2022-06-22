import { Route, Routes } from 'react-router-dom'
import {
  HomePage,
  OrdersList,
  SignInPage,
  UsersPage,
} from 'src/components/_pages'
import { isAuthenticated } from 'src/helper/helper'
import { useAppSelector } from 'src/redux/hooks'
import { getLoginUser } from 'src/redux/users/selectors'
import { routes } from './Config/config.routes'
import { PrivateRoute } from './PrivateRoute'

const AppRoutes = () => {
  const login = useAppSelector(getLoginUser)
  return (
    <Routes>
      <Route
        path={routes.default}
        element={
          login === false && !isAuthenticated ? <SignInPage /> : <UsersPage />
        }
      />
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
