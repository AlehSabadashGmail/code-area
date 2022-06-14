import { IUserState } from './type'

export const getUserInfo = (state: { user: IUserState }) => state.user
