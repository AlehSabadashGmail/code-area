import { Navigate } from 'react-router-dom'

import { isAuthenticated } from 'src/helper/helper'

export const PrivateRoute = ({ children }: any) => {
  return isAuthenticated ? children : <Navigate to="/" />
}
