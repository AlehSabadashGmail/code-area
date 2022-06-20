import { Navigate } from 'react-router-dom'

const isAuthenticated = localStorage.getItem('token')

export const PrivateRoute = ({ children }: any) => {
  return isAuthenticated ? children : <Navigate to="/" />
}
