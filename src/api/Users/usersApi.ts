import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'
import { UsersResponse, FormData } from './api'

const fetcher = new Fetcher()

export const requestAddUsers = (data: FormData) =>
  fetcher.requestToReceive<FormData, UsersResponse>({
    url: 'https://core-area-api.herokuapp.com/users',
    method: HTTP_METHODS.POST,
    data,
  })
