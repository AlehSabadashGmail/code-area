import apiClient from 'src/helper/api'

class UsersService {
  getAllOrders = () => apiClient().get('orders')
}

export default new UsersService()
