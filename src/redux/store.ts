import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import commonSlice from './reducers/commonSlice'
import usersSlice from './reducers/usersSlice'

export const store = configureStore({
  reducer: {
    common: commonSlice,
    users: usersSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
