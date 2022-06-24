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
    usersLoadSuccess(state: IUserState, action: PayloadAction<IUser[]>) {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
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
    setUsers(state: IUserState, action: PayloadAction<{ data: IUser[] }>) {
      const { data } = action.payload
      state.isLoaded = true
      state.users = data
    },
    clearUsers(state: IUserState) {
      state.users = []
    },
  },
})

export default userSlice.reducer
export const {
  usersLoadSuccess,
  setUsers,
  clearUsers,
  loading,
  finish,
  error,
} = userSlice.actions
