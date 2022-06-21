import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserState } from '..'

const initialState: IUserState = {
  users: [],
  isLoading: false,
  isLoaded: false,
  error: null,
  login: false,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loading(state: IUserState) {
      state.isLoading = true
      state.error = null
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
    setLogin(state: IUserState, action: PayloadAction<boolean>) {
      state.login = action.payload
    },
  },
})

export default userSlice.reducer
export const { loading, finish, error, setLogin } = userSlice.actions
