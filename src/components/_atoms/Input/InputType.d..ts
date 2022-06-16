import React from 'react'

export type InputType = {
  className?: string
  placeholder?: string
  value?: string | number | readonly string[] | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement> | undefined
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
}
