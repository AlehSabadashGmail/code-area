export interface IOrder {
  id: string
  user_id: string
  product_name: string
  status: string[]
  price_min: number
  price_max: string
  address: string
  location: object
  description: string
  created_at: string
  path: object[]
}
