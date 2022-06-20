import { reqestSignIn as requestSignInAPI } from 'src/components/_templates/SignIn/api'
import { error, finish, loading } from '../reducers/userSlice'
import { AppThunk } from '../store'
import { RequestSignInActionProps } from '../types/RequestSignInActionProps'

export const requestSignIn =
  ({ users }: RequestSignInActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestSignInAPI(users)
      if (data) {
        localStorage.setItem('token', data.token)
      }
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }
