import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IOrdersState, IOrder } from '../orders/type'

const initialState: IOrdersState = {
  orders: [],
  isLoading: false,
  error: null,
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    ordersLoadStart(state: IOrdersState) {
      state.isLoading = true
      state.orders = []
    },
    ordersLoadFinish(state: IOrdersState, action: PayloadAction<IOrder[]>) {
      state.isLoading = false
      state.error = ''
      state.orders = action.payload.reverse()
    },
  },
})

export default ordersSlice.reducer
export const { ordersLoadStart, ordersLoadFinish } = ordersSlice.actions
