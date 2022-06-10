import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState } from '../user/type'

const initialState: IUserState = {
  user: [],
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersLoadStart(state: IUserState) {
      state.isLoading = true
      state.user = []
    },
    usersLoadSuccess(state: IUserState, action: PayloadAction<IUser[]>) {
      state.isLoading = false
      state.error = ''
      state.user = action.payload.reverse()
    },
    setUsers(state: IUserState, action: PayloadAction<IUser[]>) {
      const data = action.payload
      state.isLoaded = true
      state.user = data
    },
    clearUsers(state: IUserState) {
      state.user = []
    },
  },
})

export default userSlice.reducer
export const { usersLoadStart, usersLoadSuccess, setUsers, clearUsers } =
  userSlice.actions
