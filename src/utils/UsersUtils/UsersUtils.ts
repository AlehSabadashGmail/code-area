import { FormData } from 'src/api/Users/api'
import { IUser } from 'src/redux/users/type'
import { CURRENT_USER } from 'src/Text'

export const UtilsAddUsers = (formData: FormData): IUser => ({
  ...formData,
  gender: CURRENT_USER.gender,
  address: CURRENT_USER.address,
  latitude: CURRENT_USER.latitude,
  longitude: CURRENT_USER.longitude,
  phone: CURRENT_USER.phone,
})
