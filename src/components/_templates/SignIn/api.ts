import { HTTP_METHODS } from '../../../helper/api'
import { IUser } from '../../../redux/users/type'
import Fetcher from '../../../services/Fetcher'

const fetcher = new Fetcher()

export type SignInData = {
  login: string
  password: string
}

export type SignInResponse = {
  users: IUser[]
  token: string
}

export const reqestSignIn = (data: SignInData) =>
  fetcher.requestAuth<SignInData, SignInResponse>({
    url: 'https://core-area-api.herokuapp.com/login',
    method: HTTP_METHODS.POST,
    data,
  })
