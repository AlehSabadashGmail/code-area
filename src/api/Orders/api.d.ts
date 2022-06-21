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
