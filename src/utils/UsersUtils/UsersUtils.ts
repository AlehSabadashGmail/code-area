import { FormData } from 'src/constants/Api/Users/api'
import { CURRENT_USER } from 'src/constants'
import { IUser } from 'src/redux/users/type'

export const UtilsAddUsers = (formData: FormData): IUser => ({
  ...formData,
  gender: CURRENT_USER.gender,
  address: CURRENT_USER.address,
  latitude: CURRENT_USER.latitude,
  longitude: CURRENT_USER.longitude,
  phone: CURRENT_USER.phone,
})
