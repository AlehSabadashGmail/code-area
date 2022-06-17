const token = JSON.parse(localStorage.getItem('token') || '')

export const deleteUser = (id: string) => {
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
      console.log('Delete successful')
    },
  )
}
