import cn from 'classnames'
import { TableDefault } from 'src/components/_atoms'
import { columns } from 'src/components/_molecules'
import { ListType } from './ListType.d'
import './style.scss'

export const List = ({ className, data }: ListType) => {
  return (
    <div className={cn('user-list', className)}>
      <TableDefault dataSource={data} sizeTable="middle" columns={columns} />
    </div>
  )
}
