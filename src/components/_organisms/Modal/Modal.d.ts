import { IUser } from 'src/redux/types'

export type ModalType = {
  form: FormInstance
  onFinish: (users: IUser) => void
  submit: MouseEventHandler<HTMLElement>
  title: string
  isDisabled: boolean
  visible: boolean
  handleCancel: MouseEventHandler<HTMLElement>
}
