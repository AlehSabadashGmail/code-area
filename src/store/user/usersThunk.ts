import UsersService from '../../services/services'
import { AppDispatch } from '../store'
import { usersLoadStart, usersLoadSuccess } from '../user/userSlice'

export const loadUsersAsync = () => (dispatch: AppDispatch) => {
  dispatch(usersLoadStart())

  UsersService.getAllUsers().then((response) =>
    dispatch(usersLoadSuccess(response.data)),
  )
}
