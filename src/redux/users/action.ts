import { reqestUserInfo as reqestUserInfoAPI } from '../../components/_templates/UserList/api'
import { reqestSignIn as requestSignInAPI } from '../../components/_templates/SignIn/api'
import { RequestSignInActionProps } from '..'
import { AppThunk } from '../store'
import {
  error,
  finish,
  loading,
  setUsers,
  usersLoadSuccess,
} from '../reducers/usersSlice'

export const requestSignIn =
  ({ users }: RequestSignInActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestSignInAPI(users)
      if (data) {
        dispatch(setUsers({ data: data.users }))
        localStorage.setItem('token', data.token)
      }
    } finally {
      dispatch(finish())
    }
  }

export const requestUserInfo = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading())
    const response = await reqestUserInfoAPI()
    dispatch(usersLoadSuccess(response.data))
  } finally {
    dispatch(finish())
  }
}
