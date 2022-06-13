import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, UsersPage, SignInPage } from '../components/_pages'
import { useLocalStorage } from '../redux/hooks'
import { routes } from './Config/config.routes'

type SetUsername = (x: string | null) => void

export const ContextLocalStorage = React.createContext<SetUsername | null>(null)

const AppRoutes = () => {
  const [username, setUsername] = useLocalStorage<string | null>(
    'username',
    localStorage.getItem('username'),
  )

  return (
    <ContextLocalStorage.Provider value={setUsername}>
      <Routes>
        {username === null ? (
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
