import { IUser } from 'src/redux'
import { FormData } from './AddUsers/apiType'

export const initialData = (formData: FormData): IUser => ({
  ...formData,
  gender: 'male',
  address: 'Homel',
  latitude: 10,
  longitude: 10,
  phone: '+3752964928363',
})
