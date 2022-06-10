import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './reducers/commonSlice'
import userSlice from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    common: commonSlice,
    user: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
