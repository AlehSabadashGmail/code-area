import { useAppDispatch } from 'src/redux/hooks'
import { deleteUsers } from 'src/redux/users/action'
import { ButtonOnConfirm } from '../ButtonOnConfirm'

export const DelteButton = (id: string) => {
  const dispatch = useAppDispatch()

  const deleteUser = (id: string) => {
    dispatch(deleteUsers(id))
  }
  return (
    <>
      <ButtonOnConfirm
        onConfirm={(e) => {
          deleteUser(id)
        }}
      />
    </>
  )
}
