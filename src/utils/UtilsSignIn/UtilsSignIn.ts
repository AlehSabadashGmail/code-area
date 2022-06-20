import { FormDataSigIn, SignInData } from 'src/components/_templates/SignIn'

export const UtilsSignIn = (formData: FormDataSigIn): SignInData => ({
  login: formData.username,
  password: formData.password,
})
