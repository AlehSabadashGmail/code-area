import { UserInfoData, UserInfoResponse } from '.'
import { HTTP_METHODS } from '../../../helper/api'
import Fetcher from '../../../services/Fetcher'

const fetcher = new Fetcher()

export const reqestUserInfo = () =>
  fetcher.requestToReceive<UserInfoData, UserInfoResponse>({
    url: 'users',
    method: HTTP_METHODS.GET,
  })
