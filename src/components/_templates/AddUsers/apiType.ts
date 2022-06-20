import { IUser } from 'src/redux'

export type FormData = {
  first_name: string
  last_name: string
  user_name: string
  email: string
  address: string
  gender: string
  age: number
  latitude: number
  longitude: number
  role: string
  phone: string
  password: string
  created_at: string
}

export type AddUsersResponse = {
  users: IUser[]
}
