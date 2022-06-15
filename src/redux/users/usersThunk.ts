import { usersLoadStart, usersLoadSuccess } from '../reducers/userSlice'
import UsersService from '../../services/services'
import { AppDispatch } from '../store'

export const loadUsersAsync = () => (dispatch: AppDispatch) => {
  dispatch(usersLoadStart())

  UsersService.getAllUsers().then((response) =>
    dispatch(usersLoadSuccess(response.data)),
  )
}
