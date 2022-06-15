import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './reducers/commonSlice'
import ordersSlice from './reducers/ordersSlice'

export const store = configureStore({
  reducer: {
    common: commonSlice,
    orders: ordersSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
