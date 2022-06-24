import { requestAddOrders as requestAddOrdersAPI } from 'src/constants/Api/Orders/ordersApi'
import { AppThunk } from '../store'
import {
  error,
  ordersFinishLoading,
  ordersLoading,
  setOrders,
} from '../reducers/ordersSlice'
import { RequestAddOrdersActionProps } from 'src/constants/Api/Orders/api'
import { notification } from 'antd'

export const requestAddOrders =
  ({ orders }: RequestAddOrdersActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(ordersLoading())
      const { data } = await requestAddOrdersAPI(orders)
      if (data) {
        dispatch(setOrders({ data: data.orders }))
        notification.open({
          message: 'Order successfully added!',
        })
      }
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(ordersFinishLoading())
    }
  }
