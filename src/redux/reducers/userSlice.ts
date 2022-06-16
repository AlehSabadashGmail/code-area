import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState } from '../users/type'

const initialState: IUserState = {
  users: [],
  isLoading: false,
  isLoaded: false,
  error: null,
  filteredUsers: [],
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
      state.filteredUsers = [...state.users]
    },
    setUsers(state: IUserState, action: PayloadAction<IUser[]>) {
      const data = action.payload
      state.isLoaded = true
      state.users = data
      state.filteredUsers = [...state.users]
    },
    setFilteredUsers(state: IUserState, action: PayloadAction<IUser[]>) {
      state.filteredUsers = action.payload
    },
    clearUsers(state: IUserState) {
      state.users = []
    },
  },
})

export default userSlice.reducer
export const {
  usersLoadStart,
  usersLoadSuccess,
  setUsers,
  clearUsers,
  setFilteredUsers,
} = userSlice.actions
