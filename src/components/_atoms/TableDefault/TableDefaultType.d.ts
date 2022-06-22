import { ColumnsType } from 'antd/lib/table'

export type TableDefaultType = {
  dataSource: Array[]
  className?: string
  columns: ColumnsType<Array>
  sizeTable: SizeType
}
