import { notification } from 'antd'
import { reqestSignIn as requestSignInAPI } from 'src/components/_templates/SignIn/api'
import { error, finish, loading, setLogin } from '../reducers/userSlice'
import { AppThunk } from '../store'
import { RequestSignInActionProps } from '../types/RequestSignInActionProps'

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
