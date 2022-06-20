import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState } from '..'

const initialState: IUserState = {
  users: [],
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loading(state: IUserState) {
      state.isLoading = true
      state.error = null
    },
    setUsers(state: IUserState, action: PayloadAction<{ data: IUser[] }>) {
      const { data } = action.payload
      state.isLoaded = true
      state.users = data
    },
    finish(state: IUserState) {
      state.isLoading = false
    },
    error(
      state: IUserState,
      action: PayloadAction<{ error: IUserState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error
    },
  },
})

export default userSlice.reducer
export const { setUsers, loading, finish, error } = userSlice.actions
