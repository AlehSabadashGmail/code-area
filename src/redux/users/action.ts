import {
  error,
  finish,
  loading,
  setUsers,
  usersLoadSuccess,
  remove,
} from '../reducers/usersSlice'
import { AppThunk } from '../store'
import { reqestSignIn as requestSignInAPI } from '../../components/_templates/SignIn/api'
import { reqestUserInfo as reqestUserInfoAPI } from '../../components/_templates/UserList/api'
<<<<<<< HEAD
import { reqestDeleteUsers as reqestDeleteUsersAPI } from '../../components/_molecules/Columns/api'
=======
import { SignInData } from '../../components/_templates/SignIn'
>>>>>>> feature/listOfUsers

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
        dispatch(remove({ id }))
        dispatch(requestUserInfo())
      }
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }
