import cn from 'classnames'
import { TableDefault } from 'src/components/_atoms'
import { columns } from 'src/components/_molecules'
import { useAppDispatch } from 'src/redux/hooks'
import { ListType } from './ListType.d'

export const List = ({ className, data }: ListType) => {
  return (
    <div className={cn('user-list', className)}>
      <TableDefault
        dataSource={data.map((item) => item)}
        sizeTable="middle"
        columns={columns}
      />
    </div>
  )
}
