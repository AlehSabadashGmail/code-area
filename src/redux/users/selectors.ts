import { IUserState } from './type'

export const getUserInfo = (state: { user: IUserState }) => state.user

export const getFilteredUsers = (state: { user: IUserState }) =>
  state.user.filteredUsers
