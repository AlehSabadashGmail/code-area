import { IProduct } from 'src/redux/types'

export type FormType = {
  form: FormInstance
  onFinish: (product: IProduct) => void
  onClick: MouseEventHandler<HTMLElement>
  submitButtonName: string
}
