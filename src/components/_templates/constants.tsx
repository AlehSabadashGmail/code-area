import { getDateNow } from '../../helper/helper'
import { IOrder } from '../../redux/orders/type'

export type OrderData = {
  id: string
  user_id: string
  product_name: string
  status: string[]
  price_min: number
  price_max: string
  address: string
  description: string
  location: {
    latitude: string
    longitude: string
  }
  created_at: string
  path: {
    latitude: string
    longitude: string
    address: string
    description: string
  }
}

export const initialOrderData = (orderData: OrderData): IOrder => ({
  id: (Math.random() + 1).toString(36).substring(2),
  user_id: (Math.random() + 1).toString(36).substring(2),
  product_name: orderData.product_name,
  status: ['in storage'],
  price_min: orderData.price_min,
  price_max: orderData.price_max,
  location: {
    latitude: orderData.location.latitude,
    longitude: orderData.location.longitude,
  },
  address: orderData.address,
  description: orderData.description,
  created_at: getDateNow(),
  path: [
    {
      longitude: orderData.location.longitude,
      latitude: orderData.location.latitude,
      address: orderData.address,
      description: orderData.description,
    },
  ],
})
