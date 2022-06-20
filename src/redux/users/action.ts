import {
  error,
  finish,
  loading,
  setUsers,
  usersLoadSuccess,
} from '../reducers/usersSlice'
import { AppThunk } from '../store'
import { reqestSignIn as requestSignInAPI } from '../../components/_templates/SignIn/api'
import { reqestAddUsers as requestAddUsersAPI } from '../../components/_templates/AddUsers/api'
import { reqestUserInfo as reqestUserInfoAPI } from '../../components/_templates/UserList/api'
import { SignInData } from '../../components/_templates/SignIn'
import { FormData } from 'src/components/_templates/AddUsers/apiType'

export type RequestSignInActionProps = {
  users: SignInData
  onSuccess?: Function
  onError?: Function
}

export type RequesAddUsersActionProps = {
  users: FormData
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

export const requestAddUsers =
  ({ users }: RequesAddUsersActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestAddUsersAPI(users)
      if (data) {
        dispatch(setUsers({ data: data.users }))
        dispatch(requestUserInfo())
      }
    } finally {
      dispatch(finish())
    }
  }
