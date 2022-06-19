import { IUserState } from './type'

export const getUserInfo = (state: { users: IUserState }) => state.users

export const getFilteredUsers = (state: { users: IUserState }) =>
  state.users.filteredUsers
