import { IProductsState } from '../types'

export const getProducts = (state: { products: IProductsState }) =>
  state.products
