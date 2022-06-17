import { Table } from 'antd'
import cn from 'classnames'
import { Columns } from '../../_molecules/Columns/Column'
import { TableType } from './Table.d'

export const List = ({ ...props }: TableType) => {
  const columns = Columns()
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
