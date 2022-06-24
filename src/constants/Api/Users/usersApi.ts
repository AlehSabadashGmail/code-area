import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'
import { UsersResponse, FormData, UserInfoResponse } from './api'

const fetcher = new Fetcher()

export const reqestUserInfo = () =>
  fetcher.requestToReceive<FormData, UserInfoResponse>({
    url: 'users',
    method: HTTP_METHODS.GET,
  })

export const requestAddUsers = (data: FormData) =>
  fetcher.requestToReceive<FormData, UsersResponse>({
    url: 'users',
    method: HTTP_METHODS.POST,
    data,
  })
