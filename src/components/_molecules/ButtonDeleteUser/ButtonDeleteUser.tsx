import { DeleteOutlined } from '@ant-design/icons'
import { Button, Popconfirm } from 'antd'
import { ButtonDeleteUserType } from './ButtonDeleteUserType'

export const ButtonDeleteUser = ({ ...props }: ButtonDeleteUserType) => {
  return (
    <Popconfirm title="Are you sure?" onConfirm={props.onConfirm}>
      <Button icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}
