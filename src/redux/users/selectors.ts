import { IUserState } from './type'

export const getIsLoading = (state: { users: IUserState }) => state.users
