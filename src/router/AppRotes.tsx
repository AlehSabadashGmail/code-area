import { Route, Routes } from 'react-router-dom'
import { OrdersList } from 'src/components/_pages/OrdersList'
import { useAppSelector } from 'src/redux/hooks'
import { getLoginUser } from 'src/redux/users/selectors'
import { HomePage, UsersPage, SignInPage } from '../components/_pages'
import { routes } from './Config/config.routes'
import { PrivateRoute } from './PrivateRoute'

const AppRoutes = () => {
  const login = useAppSelector(getLoginUser)
  return (
    <Routes>
      <Route
        path={routes.default}
        element={login === true ? <UsersPage /> : <SignInPage />}
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
