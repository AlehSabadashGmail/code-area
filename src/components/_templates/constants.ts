import { IUser } from '../../redux/user/type'

export type FormData = {
  first_name: string
  last_name: string
  user_name: string
  email: string
  address: string
  gender: string
  age: number
  latitude: number
  longitude: number
  role: string
  phone: string
  password: string
}

export const initialData = (formData: FormData): IUser => ({
  first_name: formData.first_name,
  last_name: formData.last_name,
  user_name: formData.user_name,
  email: formData.email,
  gender: 'male',
  address: 'Homel',
  age: formData.age,
  latitude: 10,
  longitude: 10,
  role: formData.role,
  phone: '+3752964928363',
  password: formData.password,
})
