import { DeleteOutlined } from '@ant-design/icons'
import { Button, Popconfirm } from 'antd'
import { ButtonOnConfirmType } from './ButtonOnConfirmType'

export const ButtonOnConfirm = ({ onConfirm }: ButtonOnConfirmType) => {
  return (
    <Popconfirm title="Are you sure?" onConfirm={onConfirm}>
      <Button icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}
