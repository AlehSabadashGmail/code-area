import { reqestUserInfo as reqestUserInfoAPI } from 'src/components/_templates/UserList/api'
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
