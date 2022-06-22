import { useAppDispatch } from 'src/redux/hooks'
import { deleteUsers } from 'src/redux/users/action'
import { ButtonOnConfirm } from '../ButtonOnConfirm'

export const DeleteButton = (id: string | undefined) => {
  const dispatch = useAppDispatch()

  const deleteUser = (id: string | undefined) => {
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
