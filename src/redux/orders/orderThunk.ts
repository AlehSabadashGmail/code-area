import Service from '../../services/services'
import { ordersLoadStart, ordersLoadFinish } from '../reducers/ordersSlice'
import { AppDispatch } from '../store'

export const loadOrdersAsync = () => (dispatch: AppDispatch) => {
  dispatch(ordersLoadStart())

  Service.getAllOrders().then((response) =>
    dispatch(ordersLoadFinish(response.data)),
  )
}
