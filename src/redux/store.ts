import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import commonSlice from './reducers/commonSlice'
import ordersSlice from './reducers/ordersSlice'
import usersSlice from './reducers/usersSlice'
import productsSlice from './reducers/productsSlice'

export const store = configureStore({
  reducer: {
    common: commonSlice,
    orders: ordersSlice,
    users: usersSlice,
    products: productsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
