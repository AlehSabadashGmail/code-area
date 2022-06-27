import { requestAddOrders as requestAddOrdersAPI } from 'src/constants/Api/Orders/ordersApi'
import { requestOrdersInfo as requestOrdersInfoAPI } from 'src/constants/Api/Orders/ordersApi'
import { AppThunk } from '../store'
import {
  error,
  ordersFinishLoading,
  ordersLoading,
  ordersLoadSuccess,
  setOrders,
} from '../reducers/ordersSlice'
import {
  RequestAddOrdersActionProps,
  RequestStatusValue,
} from 'src/constants/Api/Orders/api'

export const requestOrdersInfo =
  ({ status }: RequestStatusValue): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(ordersLoading())
      const response = await requestOrdersInfoAPI(status)
      dispatch(ordersLoadSuccess(response.data))
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(ordersFinishLoading())
    }
  }

export const requestAddOrders =
  (
    { orders }: RequestAddOrdersActionProps,
    { status }: RequestStatusValue,
  ): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(ordersLoading())
      const { data } = await requestAddOrdersAPI(orders)
      if (data) {
        dispatch(setOrders({ data: data.orders }))
        const response = await requestOrdersInfoAPI(status)
        dispatch(ordersLoadSuccess(response.data))
      }
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(ordersFinishLoading())
    }
  }
