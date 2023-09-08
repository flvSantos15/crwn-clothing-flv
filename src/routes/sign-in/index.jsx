import { signInWithGooglePopup } from '../../utils/firebase'
import { createUserDocumentFromAuth } from '../../services/firebase/auth'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  )
}

export default SignIn
