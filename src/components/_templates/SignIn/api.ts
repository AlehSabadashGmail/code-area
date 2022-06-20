import { SignInData, SignInResponse } from '.'
import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'

const fetcher = new Fetcher()

export const reqestSignIn = (data: SignInData) =>
  fetcher.requestToReceive<SignInData, SignInResponse>({
    url: 'login',
    method: HTTP_METHODS.POST,
    data,
  })
