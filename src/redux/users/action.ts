import { reqestUserInfo as reqestUserInfoAPI } from 'src/components/_templates/UserList/api'
import { reqestDeleteUsers as reqestDeleteUsersAPI } from 'src/components/_molecules/Columns/api'
import { AppThunk } from '../store'
import { requestAddUsers as requestAddUsersAPI } from 'src/constants/Api/Users/usersApi'
import {
  error,
  finish,
  loading,
  setUsers,
  usersLoadSuccess,
} from '../reducers/usersSlice'
import { RequestAddUsersActionProps } from './constants'

export const requestUserInfo = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading())
    const response = await reqestUserInfoAPI()
    dispatch(usersLoadSuccess(response.data))
  } catch (err) {
    dispatch(error({ error: err }))
  } finally {
    dispatch(finish())
  }
}

export const deleteUsers =
  (id: string | undefined): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const result = await reqestDeleteUsersAPI(id)
      if (result) {
        dispatch(requestUserInfo())
      }
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
