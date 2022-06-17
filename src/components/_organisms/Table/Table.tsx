import { Table } from 'antd'
import cn from 'classnames'
import { columns } from '../../_molecules/Columns/Column'
import { TableType } from './Table.d'

export const List = ({ ...props }: TableType) => {
  return (
    <div className={cn('user-list', props.className)}>
      <Table
        dataSource={props.children}
        size="middle"
        columns={columns}
        bordered
      />
    </div>
  )
}
