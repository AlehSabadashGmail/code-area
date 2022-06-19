import { IUser } from '../../../redux/users/type'

export type SignInData = {
  login: string
  password: string
}

export type SignInResponse = {
  users: IUser[]
  token: string
}
