import moment from 'moment'

export const getDateFormat = (date: string) => moment(date).format('DD-MM-YYYY')

export const RULES_FORM = {
  Username: {
    required: true,
    message: 'Please input your username!',
  },
  Password: {
    required: true,
    message: 'Please input your password!',
  },
} as const

export const OPTIONS = [
  { value: 'admin', label: 'admin' },
  { value: 'user', label: 'user' },
  { value: 'observer', label: 'observer' },
]
