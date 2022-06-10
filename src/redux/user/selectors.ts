import { IUserState } from './type'

export const getIsLoading = (state: { user: IUserState }) => state.user
