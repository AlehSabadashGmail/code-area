import { Route, Routes } from 'react-router-dom'
import {
  FlowersPage,
  HomePage,
  OrdersList,
  PeoplePage,
  TasksList,
  UsersPage,
} from 'src/components/_pages'
import { routes } from './Config/config.routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.default} element={<HomePage />} />
      <Route path={routes.usersList} element={<UsersPage />} />
      <Route path={routes.ordersList} element={<OrdersList />} />
      <Route path={routes.tasks} element={<TasksList />} />
      <Route path={routes.flowers} element={<FlowersPage />} />
      <Route path={routes.people} element={<PeoplePage />} />
    </Routes>
  )
}

export default AppRoutes
