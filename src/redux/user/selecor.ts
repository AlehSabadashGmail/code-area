import { IUserState } from './type'

export const getUserInfo = (state: { users: IUserState }) => state.users
