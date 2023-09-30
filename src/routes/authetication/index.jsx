import { SignUpForm } from '../../components/sign-up-form'
import { SignInForm } from '../../components/sign-in-form'

import { AutheticationContainer } from './styles'

export default function Authetication() {
  return (
    <AutheticationContainer>
      <SignInForm />

      <SignUpForm />
    </AutheticationContainer>
  )
}
