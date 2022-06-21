import {
  usersLoadStart,
  usersLoadFinish,
  setUsers,
} from '../reducers/userSlice'
import { requestAddUsers as requestAddUsersAPI } from 'src/api/Users/usersApi'
import { AppThunk } from '../store'
import { FormData } from 'src/api/Users/api'

export type RequesAddUsersActionProps = {
  users: FormData
}

export const requestAddUsers =
  ({ users }: RequesAddUsersActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(usersLoadStart())
      const { data } = await requestAddUsersAPI(users)
      if (data) {
        dispatch(setUsers({ data: data.users }))
      }
    } finally {
      dispatch(usersLoadFinish())
    }
  }
