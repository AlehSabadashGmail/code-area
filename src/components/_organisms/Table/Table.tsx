import { Table } from 'antd'
import cn from 'classnames'
import { TableType } from '.'
import { columns } from '../../../constants'

export const List = ({ data, className }: TableType): JSX.Element => (
  <div className={cn('user-list', className)}>
    <Table dataSource={data} size="middle" columns={columns} bordered />
  </div>
)
