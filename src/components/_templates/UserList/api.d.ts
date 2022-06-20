import { IUser } from '../../../redux'

export type UserInfoData = {
  id: string
  age: number
  first_name: string
  last_name: string
  user_name: string
  password: string
  email: string
  phone: string
  role: string
  created_at: string
}

export type UserInfoResponse = IUser[]
