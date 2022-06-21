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
import moment from 'moment'

export const getDateNow = () => moment().format('DD-MM-YYYY')

export const isAuthenticated = localStorage.getItem('token')
