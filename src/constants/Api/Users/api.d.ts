import { IUser } from 'src/redux'

export type FormData = {
  id: string
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

export type UsersResponse = {
  users: IUser[]
}

export type RequestUsersActionProps = {
  users: FormData
}

export type UserInfoResponse = IUser[]
