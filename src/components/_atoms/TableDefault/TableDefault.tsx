import { Table } from 'antd'
import cn from 'classnames'

import { TableDefaultType } from '.'

export const TableDefault = ({
  className,
  dataSource,
  columns,
  sizeTable,
}: TableDefaultType) => {
  return (
    <div className={cn('card-default', className)}>
      <Table
        dataSource={dataSource}
        columns={columns}
        size={sizeTable}
        bordered
      />
    </div>
  )
}
