import apiClient from '../helper/api'
import { IUser } from '../store/user/type'

class UsersService {
  getAllUsers = () => apiClient().get('users')
}

export default new UsersService()
