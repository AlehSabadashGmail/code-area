import { IUser } from '../../redux/user/type'
import { format } from 'date-fns'

export type FormData = {
  id: string
  first_name: string
  last_name: string
  user_name: string
  email: string
  age: number
  role: string
  password: string
  created_at: string
}

export const initialData = (formData: FormData): IUser => ({
  id: Date.now().toString(),
  first_name: formData.first_name,
  last_name: formData.last_name,
  user_name: formData.user_name,
  email: formData.email,
  age: formData.age,
  role: formData.role,
  password: formData.password,
  created_at: format(new Date(), 'MM/dd/yyyy'),
})
