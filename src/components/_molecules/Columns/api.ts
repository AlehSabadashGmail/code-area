import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'
import { IUser } from 'src/redux'

const fetcher = new Fetcher()

export const reqestDeleteUsers = (id: string | undefined) =>
  fetcher.requestToReceive<IUser, Object>({
    url: `users/${id}`,
    method: HTTP_METHODS.DELETE,
  })
