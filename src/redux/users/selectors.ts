import { IUserState } from '../index'

export const getLoginUser = (state: { users: IUserState }) => state.users.login
export const getUserInfo = (state: { users: IUserState }) => state.users
