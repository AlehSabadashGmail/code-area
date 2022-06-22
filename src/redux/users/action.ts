import { reqestUserInfo as reqestUserInfoAPI } from 'src/components/_templates/UserList/api'
import { reqestDeleteUsers as reqestDeleteUsersAPI } from '../../constants/Columns/api'
import { AppThunk } from '../store'
import {
  error,
  finish,
  loading,
  usersLoadSuccess,
} from '../reducers/usersSlice'

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
  (id: string): AppThunk =>
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
