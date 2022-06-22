import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IOrder, IOrdersState } from '..'

const initialState: IOrdersState = {
  orders: [],
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    ordersLoading(state: IOrdersState) {
      state.isLoading = true
      state.error = null
    },
    ordersFinishLoading(state: IOrdersState) {
      state.isLoading = false
    },
    error(
      state: IOrdersState,
      action: PayloadAction<{ error: IOrdersState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error
    },
    setOrders(state: IOrdersState, action: PayloadAction<{ data: IOrder[] }>) {
      const { data } = action.payload
      state.isLoaded = true
      state.orders = data
    },
  },
})

export default ordersSlice.reducer
export const { setOrders, ordersLoading, ordersFinishLoading, error } =
  ordersSlice.actions
