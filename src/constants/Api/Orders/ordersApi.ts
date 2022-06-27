import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'
import { OrderData, OrdersResponse } from './api'

const fetcher = new Fetcher()

export const requestAddOrders = (data: OrderData) =>
  fetcher.requestToReceive<OrderData, OrdersResponse>({
    url: 'orders',
    method: HTTP_METHODS.POST,
    data,
  })
