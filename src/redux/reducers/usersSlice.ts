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
    loading(state: IUserState) {
      state.isLoading = true
      state.error = null
    },
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
      state.filteredUsers = [...state.users]
    },
    setFilteredUsers(state: IUserState, action: PayloadAction<IUser[]>) {
      state.filteredUsers = action.payload
    },
    clearUsers(state: IUserState) {
      state.users = []
    },
    remove(state: IUserState, action: PayloadAction<any>) {
      const { uuid } = action.payload
      state.users = state.users.filter((i) => i.id !== uuid)
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
  error,
  finish,
  loading,
  remove,
} = userSlice.actions
