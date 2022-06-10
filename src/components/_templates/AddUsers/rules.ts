export const formRules = () => {
  return {
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
  }
}
