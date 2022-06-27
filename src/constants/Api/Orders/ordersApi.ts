import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'
import { OrderData, OrdersInfoResponse, OrdersResponse } from './api'

const fetcher = new Fetcher()

export const requestOrdersInfo = (data: string) =>
  fetcher.requestToReceive<OrderData, OrdersInfoResponse>({
    url: `orders?${data}`,
    method: HTTP_METHODS.GET,
  })

export const requestAddOrders = (data: OrderData) =>
  fetcher.requestToReceive<OrderData, OrdersResponse>({
    url: 'orders',
    method: HTTP_METHODS.POST,
    data,
  })
