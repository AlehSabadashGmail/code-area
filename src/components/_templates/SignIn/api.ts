import { SignInData, SignInResponse } from '.'
import { HTTP_METHODS } from '../../../helper/api'
import Fetcher from '../../../services/Fetcher'

const fetcher = new Fetcher()

export const reqestSignIn = (data: SignInData) =>
  fetcher.requestToReceive<SignInData, SignInResponse>({
    url: 'https://core-area-api.herokuapp.com/login',
    method: HTTP_METHODS.POST,
    data,
  })
