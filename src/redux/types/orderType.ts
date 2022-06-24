export interface IOrder {
  id: string
  user_id: string
  product_name: string
  price_min: number
  price_max: number
  address: string
  location: object
  description: string
  created_at: string
<<<<<<<< HEAD:src/redux/types/ordersType.ts
}

export interface IOrdersState {
  orders: IOrder[]
  isLoading: boolean
  isLoaded: boolean
  error: any | null
========
>>>>>>>> main:src/redux/types/orderType.ts
}
