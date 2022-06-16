import { IUser } from '../../../redux/users/type'

export type FormFilterType = {
  children: Array<IUser>
  onClick: () => void
}

export type FormDataFilters = {
  fullname: string
  username: string
  first_name: string
  role: string
  age: number
  email: string
  phone: string
}
