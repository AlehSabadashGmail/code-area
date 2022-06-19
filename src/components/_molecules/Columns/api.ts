import { HTTP_METHODS } from '../../../helper/api'
import { IUser } from '../../../redux/users/type'
import Fetcher from '../../../services/Fetcher'

const fetcher = new Fetcher()

export const reqestDeleteUsers = (id: string) =>
  fetcher.requestDelete<any, any>({
    url: `users/${id}`,
    method: HTTP_METHODS.DELETE,
  })
