export interface IEmployees {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: number
    coordinates: {
      latitude: number
      longitude: number
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  uuid: string
  username: string
  password: string
  birthday: string
  created_at: string
  phone: string
  cell: string
  id: {
    name: string
    value: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
  relatedId: string
}

export interface IEmployeesState {
  employees: IEmployees[]
  isLoading: boolean
  isLoaded: boolean
  error: any | null
}
