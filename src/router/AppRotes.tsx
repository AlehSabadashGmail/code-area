import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FormFilter } from '../components/_organisms'
import { HomePage, UsersPage, SignInPage } from '../components/_pages'
import { useLocalStorage } from '../redux/hooks'
import { routes } from './Config/config.routes'

type SetToken = (x: string | null) => void

export const ContextLocalStorage = React.createContext<SetToken | null>(null)

const AppRoutes = () => {
  const [token, setToken] = useLocalStorage<string | null>(
    'token',
    localStorage.getItem('token'),
  )

  return (
    <ContextLocalStorage.Provider value={setToken}>
      <Routes>
        {token === null ? (
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
    </ContextLocalStorage.Provider>
  )
}
export default AppRoutes
