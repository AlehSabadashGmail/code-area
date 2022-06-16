import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './reducers/commonSlice'
import userSlice from './reducers/usersSlice'

export const store = configureStore({
  reducer: {
    common: commonSlice,
    users: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
