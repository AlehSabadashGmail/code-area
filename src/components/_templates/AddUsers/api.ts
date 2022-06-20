import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'
import { FormData, AddUsersResponse } from './apiType'

const fetcher = new Fetcher()

export const reqestAddUsers = (data: FormData) =>
  fetcher.requestToReceive<FormData, AddUsersResponse>({
    url: 'https://core-area-api.herokuapp.com/users',
    method: HTTP_METHODS.POST,
    data,
  })
