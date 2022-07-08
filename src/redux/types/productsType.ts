export interface IProduct {
  id: string
  product_name: string
  price: number
  description: string
  createdAt: string
}

export interface IProductsState {
  products: IProduct[]
}
