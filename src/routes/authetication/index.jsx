import { SignUpForm } from '../../components/sign-up-form'
import { SignInForm } from '../../components/sign-in-form'

import './styles.scss'

export default function Authetication() {
  return (
    <div className="authetication-container">
      <SignInForm />

      <SignUpForm />
    </div>
  )
}
