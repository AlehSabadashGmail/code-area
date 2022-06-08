import apiClient from '../helper/api'

class UsersService {
  getAllUsers = () => apiClient().get('users')
}

export default new UsersService()
