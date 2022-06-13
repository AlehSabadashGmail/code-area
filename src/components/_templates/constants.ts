import { IUser } from '../../redux/user/type'
import moment from 'moment'
import { getDateNow } from 'src/helper/helper'

export type FormData = {
  first_name: string
  last_name: string
  user_name: string
  email: string
  age: number
  role: string
  password: string
}

export const initialData = (formData: FormData): IUser => ({
  first_name: formData.first_name,
  last_name: formData.last_name,
  user_name: formData.user_name,
  email: formData.email,
  age: formData.age,
  role: formData.role,
  password: formData.password,
})
