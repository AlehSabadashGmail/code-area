import { IUser } from '../../../redux'
import { FormDataFilters } from './FormFilterType'

const filterByFullname = (users: IUser[], filters: FormDataFilters) =>
  users.filter(
    (user) =>
      user.first_name + ' ' + user.last_name === filters.fullname ||
      !filters.fullname,
  )

const filterByUsername = (users: IUser[], filters: FormDataFilters) =>
  users.filter(
    (user) => user.user_name === filters.username || !filters.username,
  )
const filterByFirstName = (users: IUser[], filters: FormDataFilters) =>
  users.filter(
    (user) => user.first_name === filters.first_name || !filters.first_name,
  )

const filterByRole = (users: IUser[], filters: FormDataFilters) =>
  users.filter((user) => user.role === filters.role || !filters.role)

const filterByAge = (users: IUser[], filters: FormDataFilters) =>
  users.filter((user) => user.age === filters.age || !filters.age)

const filtByEremail = (users: IUser[], filters: FormDataFilters) =>
  users.filter((user) => user.email === filters.email || !filters.email)

const filterByPhone = (users: IUser[], filters: FormDataFilters) =>
  users.filter((user) => user.phone === filters.phone || !filters.phone)

export const filterFunction = [
  filterByFullname,
  filterByUsername,
  filterByFirstName,
  filterByRole,
  filterByAge,
  filtByEremail,
  filterByPhone,
]
