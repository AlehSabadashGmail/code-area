import React from 'react'

export type InputType = {
  className?: string
  placeholder?: string
  value?: string | number | readonly string[]
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}
