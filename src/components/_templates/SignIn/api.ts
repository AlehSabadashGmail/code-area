import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'
import { SignInData, SignInResponse } from '.'

const fetcher = new Fetcher()

export const reqestSignIn = (data: SignInData) =>
  fetcher.requestToReceive<SignInData, SignInResponse>({
    url: 'https://core-area-api.herokuapp.com/login',
    method: HTTP_METHODS.POST,
    data,
  })
