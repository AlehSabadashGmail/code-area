import { HTTP_METHODS } from '../../helper/api'
import Fetcher from '../../services/Fetcher'
import { IUser } from '../../redux'

const fetcher = new Fetcher()

export const reqestDeleteUsers = (id: string) =>
  fetcher.requestToReceive<IUser, Object>({
    url: `users/${id}`,
    method: HTTP_METHODS.DELETE,
  })
