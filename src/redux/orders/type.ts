export interface IOrder {
  id?: string
  user_id: string
  product_name: string
  price_min: number
  price_max: number
  address: string
  location: object
  description: string
}
