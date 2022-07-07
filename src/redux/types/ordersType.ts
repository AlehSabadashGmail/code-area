export interface IOrder {
  id: string
  user_id: string
  product_name: string
  status: string
  price_min: number
  price_max: number
  address: string
  location: object
  description: string
  created_at: string
}

export interface IOrdersState {
  orders: IOrder[]
  isLoading: boolean
  error: any | null
  isLoaded: boolean
}
