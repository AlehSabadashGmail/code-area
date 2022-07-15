import { FlowersData } from 'src/constants/Api/Flowers/flowers'

export type FormType = {
  form: FormInstance
  onFinish: (flower: FlowersData) => void
}
