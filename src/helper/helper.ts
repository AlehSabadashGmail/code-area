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

export const RULES_FORM_FILTER = {
  Fullname: {
    pattern: new RegExp(/^[a-z ,.'-]+$/i),
    message: 'Name and surname entered incorrectly',
  },
  First_name: {
    pattern: new RegExp(/^[A-ZА-ЯЁ]+$/i),
    message: 'Name entered incorrectly',
  },
  Email: {
    pattern: new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    message: 'Email entered incorrectly',
  },
  Phone: {
    pattern: new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/),
    message: 'Phone entered incorrectly',
  },
} as const

export const OPTIONS = [
  { value: 'admin', label: 'admin' },
  { value: 'user', label: 'user' },
  { value: 'observer', label: 'observer' },
]
