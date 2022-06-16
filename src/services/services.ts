import apiClient from 'src/helper/api'
import { IOrder } from 'src/redux/orders/type'

class UsersService {
  getAllOrders = () => apiClient().get('orders')
}

export default new UsersService()
