import { SignInData } from '../../components/_templates/SignIn/api'
import { error, finish, loading, setUsers } from '../reducers/userSlice'
import { AppThunk } from '../store'
import { reqestSignIn as requestSignInAPI } from '../../components/_templates/SignIn/api'

export type RequestSignInActionProps = {
  users: SignInData
  onSuccess?: Function
  onError?: Function
}

export const requestSignIn =
  ({ users, onSuccess, onError }: RequestSignInActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestSignInAPI(users)
      if (data) {
        dispatch(setUsers({ data: data.users }))
        localStorage.setItem('token', data.token)
        onSuccess && onSuccess()
      }
    } catch (err) {
      dispatch(error({ error: err }))
      onError && onError()
    } finally {
      dispatch(finish())
    }
  }
