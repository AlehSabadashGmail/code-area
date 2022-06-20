import { IUser } from 'src/redux/users/type'

export type SignInData = {
  login: string
  password: string
}

export type SignInResponse = {
  users: IUser[]
  token: string
}

export type FormDataSigIn = {
  username: string
  password: string
}
