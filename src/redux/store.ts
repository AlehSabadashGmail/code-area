import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import commonSlice from './reducers/commonSlice'
import userSlice from './reducers/usersSlice'
import ordersSlice from './reducers/ordersSlice'

export const store = configureStore({
  reducer: {
    common: commonSlice,
    users: userSlice,
    orders: ordersSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
