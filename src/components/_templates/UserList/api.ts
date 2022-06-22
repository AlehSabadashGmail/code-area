import { UserInfoData, UserInfoResponse } from './api.d'
import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'

const fetcher = new Fetcher()

export const reqestUserInfo = () =>
  fetcher.requestToReceive<UserInfoData, UserInfoResponse>({
    url: 'users',
    method: HTTP_METHODS.GET,
  })
