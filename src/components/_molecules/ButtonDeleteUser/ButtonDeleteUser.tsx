import { DeleteOutlined } from '@ant-design/icons'
import { Button, Popconfirm } from 'antd'
import { useAppDispatch } from '../../../redux/hooks'
import { loadUsersAsync } from '../../../redux/users/usersThunk'
import { ButtonDeleteUserType } from './ButtonDeleteUserType'

export const ButtonDeleteUser = ({ ...props }: ButtonDeleteUserType) => {
  const dispatch = useAppDispatch()
  return (
    <Popconfirm title="Are you sure?" onConfirm={props.onConfirm}>
      <Button
        icon={<DeleteOutlined />}
        onClick={() => dispatch(loadUsersAsync())}
      />
    </Popconfirm>
  )
}
