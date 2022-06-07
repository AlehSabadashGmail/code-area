export interface IUser {
  id: string
  is_active: boolean
  image: string
  age: number
  first_name: string
  last_name: string
  user_name: string
  password: string
  gender: string
  email: string
  phone: string
  address: string
  latitude: number
  longitude: number
  role: string
  created_at: string
}

export interface IUserState {
  user: IUser | null
  isLoading: boolean
  isLoaded: boolean
  error: any | null
}
