import { FlowersData } from 'src/constants/Api/Flowers/flowers'

export type ModalType = {
  visible: boolean
  submit: () => void
  handleCancel: () => void
  form: FormInstance
  onFinish: (flower: FlowersData) => void
}
