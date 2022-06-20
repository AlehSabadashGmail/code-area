import moment from 'moment'

export const getDateFormat = (date: string) => moment(date).format('DD-MM-YYYY')
export const getDateNow = () => moment().format('DD-MM-YYYY')

export const RULES_FORM = {
  Username: {
    required: true,
    message: 'Please input your username!',
  },
  Password: {
    required: true,
    message: 'Please input your password!',
  },
  firstNameRules: {
    required: true,
    message: 'First name is required',
  },
  lastNameRules: {
    required: true,
    message: 'Last name is required',
  },
  userNameRules: {
    required: true,
    message: 'User name is required',
  },
  emailRules: {
    required: true,
    message: 'Please input your e-mail!',
  },
  roleRules: {
    required: true,
    message: 'Role is required',
  },
  ageRule: {
    required: true,
    message: 'Age is required',
  },
  passwordRule: {
    required: true,
    message: 'Please input password',
  },
} as const
