import apiClient from '../helper/api'

class UsersService {
  getAllUsers = () => apiClient().get('users')
  postUsers = () => apiClient().post('users')
}

export default new UsersService()
