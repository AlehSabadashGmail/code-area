import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './reducers/commonSlice'

export const store = configureStore({
  reducer: {
    common: commonSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
