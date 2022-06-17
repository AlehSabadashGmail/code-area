import { HTTP_METHODS } from '../../../helper/api'
import { IUser } from '../../../redux/users/type'
import Fetcher from '../../../services/Fetcher'

const fetcher = new Fetcher()

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

export const reqestUserInfo = () =>
  fetcher.requestUsersInfo<UserInfoData, UserInfoResponse>({
    url: 'users',
    method: HTTP_METHODS.GET,
  })
