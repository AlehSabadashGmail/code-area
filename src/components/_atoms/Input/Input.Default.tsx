import { Input } from 'antd'
import cn from 'classnames'

import { InputDefaultType } from './Default'

export const Default = ({ ...props }: InputDefaultType): JSX.Element => (
  <div className={cn('card-default', props.className)}>
    <Input
      placeholder="Search user name"
      value={props.value}
      onChange={(e) => props.onChange({ value: e.target.value })}
    />
  </div>
)
