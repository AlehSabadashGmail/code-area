import { IOrder } from 'src/redux'

export type OrderData = {
  user_id: string
  product_name: string
  price_min: number
  price_max: number
  address: string
  description: string
  location: {
    latitude: string
    longitude: string
  }
}

export type OrdersResponse = {
  orders: IOrder[]
}

export type OrdersInfoResponse = IOrder[]

export type RequestStatusValue = {
  status: string[]
}

export type RequestAddOrdersActionProps = {
  orders: OrderData
}
