import { reqestUserInfo as reqestUserInfoAPI } from 'src/components/_templates/UserList/api'
import { reqestSignIn as requestSignInAPI } from 'src/components/_templates/SignIn/api'
import { AppThunk } from '../store'
import {
  error,
  finish,
  loading,
  setLogin,
  usersLoadSuccess,
} from '../reducers/usersSlice'
import { RequestSignInActionProps } from '../types'
import { notification } from 'antd'

export const requestSignIn =
  ({ dataLogin }: RequestSignInActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestSignInAPI(dataLogin)
      if (data) {
        localStorage.setItem('token', data.token)
        dispatch(setLogin(true))
      }
    } catch (err) {
      dispatch(error({ error: err }))
      notification.open({
        message: 'Invalid data entered',
      })
    } finally {
      dispatch(finish())
    }
  }

export const requestUserInfo = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading())
    const response = await reqestUserInfoAPI()
    dispatch(usersLoadSuccess(response.data))
  } catch (err) {
    dispatch(error({ error: err }))
    dispatch(setLogin(false))
  } finally {
    dispatch(finish())
  }
}
