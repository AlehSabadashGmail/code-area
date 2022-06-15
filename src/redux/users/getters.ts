import { IUserState } from './type'

export const getUsersInfo = (state: { users: IUserState }) => state.users
