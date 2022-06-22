import { Table } from 'antd'
import cn from 'classnames'
import { columns } from 'src/constants'

import { TableType } from './Table.d'

export const List = ({ className, data }: TableType): JSX.Element => (
  <div className={cn('user-list', className)}>
    <Table dataSource={data} size="middle" columns={columns} bordered />
  </div>
)
