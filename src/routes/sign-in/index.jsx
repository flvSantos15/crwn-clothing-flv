import { signInWithGooglePopup } from '../../utils/firebase'
import { createUserDocumentFromAuth } from '../../services/firebase/auth'

import { SignUpForm } from '../../components/sign-up-form'

export default function SignIn() {
  const handleLogGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)

    console.log(userDocRef)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={handleLogGoogleUser}>Sign in with Google</button>

      <SignUpForm />
    </div>
  )
}
