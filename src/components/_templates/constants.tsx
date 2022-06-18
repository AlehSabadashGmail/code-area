import { Typography } from 'antd'
import { IOrder } from '../../redux/orders/type'

export type OrderData = {
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

export const initialOrderData = (orderData: OrderData): IOrder => ({
  // send the id of the logged user
  user_id: currentUser.id,
  ...orderData,
})

export const currentUser = {
  id: 'c8e16622-56e5-43cf-8137-0230c1ca8d4d',
  is_active: false,
  image: 'http://placehold.it/32x32',
  age: 38,
  first_name: 'Bernard',
  last_name: 'Bond',
  user_name: 'YtStWbkpQ3ui2',
  password: 'FWep8oC8m9NnZ8',
  gender: 'male',
  email: 'bernardbond@insectus.com',
  phone: '+1 (878) 466-3964',
  address: '504 Stuyvesant Avenue, Catharine, Washington, 6071',
  latitude: -12.609311,
  longitude: -40.687713,
  role: 'admin',
  created_at: '2022-02-21T07:47:53.231Z',
}

export const { Title } = Typography
