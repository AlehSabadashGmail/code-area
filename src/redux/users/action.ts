import { AppThunk } from '../store'
import { requestAddUsers as requestAddUsersAPI } from 'src/constants/Api/Users/usersApi'
import { reqestUserInfo as reqestUserInfoAPI } from 'src/constants/Api/Users/usersApi'
import {
  error,
  finish,
  loading,
  setUsers,
  usersLoadSuccess,
} from '../reducers/usersSlice'
import { RequestAddUsersActionProps } from 'src/constants/Api/Users/api'

export const requestUserInfo =
  (pageNumber?: number, limit?: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const response = await reqestUserInfoAPI(pageNumber, limit)
      dispatch(usersLoadSuccess(response.data))
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }

export const requestAddUsers =
  ({ users }: RequestAddUsersActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestAddUsersAPI(users)
      if (data) {
        dispatch(setUsers({ data: data.users }))
        const response = await reqestUserInfoAPI()
        dispatch(usersLoadSuccess(response.data))
      }
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }
