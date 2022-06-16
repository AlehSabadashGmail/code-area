import { IUser } from '../../../redux/users/type'
import { FormDataFilters } from './FormFilterType'

const FilterFullname = (users: IUser[], filters: FormDataFilters) =>
  users.filter(
    (user) =>
      user.first_name + ' ' + user.last_name === filters.fullname ||
      !filters.fullname,
  )

const FilterUsername = (users: IUser[], filters: FormDataFilters) =>
  users.filter(
    (user) => user.user_name === filters.username || !filters.username,
  )
const FilterFirstName = (users: IUser[], filters: FormDataFilters) =>
  users.filter(
    (user) => user.first_name === filters.first_name || !filters.first_name,
  )

const FilterRole = (users: IUser[], filters: FormDataFilters) =>
  users.filter((user) => user.role === filters.role || !filters.role)

const FilterAge = (users: IUser[], filters: FormDataFilters) =>
  users.filter((user) => user.age === filters.age || !filters.age)

const FiltEremail = (users: IUser[], filters: FormDataFilters) =>
  users.filter((user) => user.email === filters.email || !filters.email)

const FilterPhone = (users: IUser[], filters: FormDataFilters) =>
  users.filter((user) => user.phone === filters.phone || !filters.phone)

export const filterFunction = [
  FilterFullname,
  FilterUsername,
  FilterFirstName,
  FilterRole,
  FilterAge,
  FiltEremail,
  FilterPhone,
]
