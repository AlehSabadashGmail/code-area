import { AppDispatch } from '../../../redux'
import { loadUsersAsync } from '../../../redux/users/usersThunk'

const token = JSON.parse(localStorage.getItem('token') || '')

export const deleteUser = (id: string, dispatch: AppDispatch) => {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }

  fetch(`https://core-area-api.herokuapp.com/users/${id}`, requestOptions).then(
    () => {
      dispatch(loadUsersAsync())
    },
  )
}
