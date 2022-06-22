import { DeleteOutlined } from '@ant-design/icons'
import { Button, Popconfirm } from 'antd'
import { ButtonDeleteUserType } from './ButtonDeleteUserType'

export const ButtonDeleteUser = ({ onConfirm }: ButtonDeleteUserType) => {
  return (
    <Popconfirm title="Are you sure?" onConfirm={onConfirm}>
      <Button icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}
