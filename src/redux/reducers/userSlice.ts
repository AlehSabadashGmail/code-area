import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState } from '../user/type'

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
    usersLoadStart(state: IUserState) {
      state.isLoading = false
      state.users = []
    },
    usersLoadSuccess(state: IUserState, action: PayloadAction<IUser[]>) {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    },
    setUsers(state: IUserState, action: PayloadAction<IUser[]>) {
      const data = action.payload
      state.isLoaded = true
      state.users = data
    },
    clearUsers(state: IUserState) {
      state.users = []
    },
  },
})

export default userSlice.reducer
export const { usersLoadStart, usersLoadSuccess, setUsers, clearUsers } =
  userSlice.actions
