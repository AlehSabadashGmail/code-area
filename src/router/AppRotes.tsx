import { Route, Routes } from 'react-router-dom'
import { HomePage, UsersPage, SignInPage } from '../components/_pages'
import { routes } from './Config/config.routes'

const AppRoutes = () => {
  const isauthenticated = localStorage.getItem('token')

  return (
    <Routes>
      {isauthenticated === '' || localStorage.length === 1 ? (
        <>
          <Route path={routes.default} element={<SignInPage />} />
        </>
      ) : (
        <>
          <Route path={routes.homepage} element={<HomePage />} />
          <Route path={routes.usersList} element={<UsersPage />} />
        </>
      )}
    </Routes>
  )
}
export default AppRoutes
