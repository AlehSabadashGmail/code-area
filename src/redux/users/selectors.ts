import { IUserState } from '..'

export const getUserInfo = (state: { users: IUserState }) => state.users

export const getFilteredUsers = (state: { users: IUserState }) =>
  state.users.filteredUsers
