import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct, IProductsState } from '../types'

const initialState: IProductsState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts(state: IProductsState, action: PayloadAction<IProduct>) {
      state.products.push(action.payload)
    },
    deleteProducts(state: IProductsState, action: PayloadAction<IProduct>) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id,
      )
    },
    editProducts(state: IProductsState, action: PayloadAction<IProduct>) {
      state.products = state.products.map((item) =>
        action.payload.id === item.id ? { ...item, ...action.payload } : item,
      )
    },
  },
})

export default productsSlice.reducer
export const { addProducts, deleteProducts, editProducts } =
  productsSlice.actions
