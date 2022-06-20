import { SignInData } from '../../components/_templates/SignIn'

export type RequestSignInActionProps = {
  users: SignInData
  onSuccess?: Function
  onError?: Function
}
