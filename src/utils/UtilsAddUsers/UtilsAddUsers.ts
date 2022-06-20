import { FormData } from 'src/components/_templates/AddUsers/apiType'
import { IUser } from 'src/redux'

export const UtilsAddUsers = (formData: FormData): IUser => ({
  ...formData,
  gender: 'male',
  address: 'Homel',
  latitude: 10,
  longitude: 10,
  phone: '+3752964928363',
})
