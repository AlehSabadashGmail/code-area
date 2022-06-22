import { IUserState } from '../index'

export const getUserInfo = (state: { users: IUserState }) => state.users
export const getIsLoading = (state: { users: IUserState }) => state.users
