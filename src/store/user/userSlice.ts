import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState } from './type'

const initialState = {
  user: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersLoadStart(state: IUserState) {
      state.isLoading = false
      state.user = null
    },
    usersLoadSuccess(state: IUserState, action: PayloadAction<IUser>) {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    set(state: IUserState, action: PayloadAction<{ data: IUser }>) {
      const { data } = action.payload
      state.isLoaded = true
      state.user = { ...state.user, ...data }
    },
  },
})

export default userSlice.reducer
export const { usersLoadStart, usersLoadSuccess } = userSlice.actions
