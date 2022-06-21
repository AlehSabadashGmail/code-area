import React from 'react'
import cn from 'classnames'
import { Input } from 'antd'
import { InputType } from './InputType'

export const InputDefault = ({ ...props }: InputType) => (
  <div className={cn('card-default', props.className)}>
    <Input
      autoFocus
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onPressEnter={props.onPressEnter}
      onBlur={props.onBlur}
    />
  </div>
)
