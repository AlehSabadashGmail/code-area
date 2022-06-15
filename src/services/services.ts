import apiClient from '../helper/api'

class UsersService {
  getAllOrders = () => apiClient().get('orders')
}

export default new UsersService()
