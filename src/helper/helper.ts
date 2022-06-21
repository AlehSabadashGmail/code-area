import moment from 'moment'

export const getDateFormat = (date: string) => moment(date).format('DD-MM-YYYY')
export const getDateNow = () => moment().format('DD-MM-YYYY')
export const isAuthenticated = localStorage.getItem('token')

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
