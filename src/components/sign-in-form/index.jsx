import { useState } from 'react'

import { signInWithGooglePopup } from '../../utils/firebase'
import { signInAuthUserWithEmailAndPassword } from '../../services/firebase/auth'

import { FormInput } from '../form-input'
import { Button, BUTTON_TYPE_CLASSES } from '../button'

import { ButtonsContainer, SignInContainer } from './styles'

const defaultFormFields = {
  email: '',
  password: ''
}

export function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSignInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)

      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email!')
          break
        case 'auth/user-not-found':
          alert('Not user associated with this email!')
          break
        default:
          console.log(error)
          break
      }
    }
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={handleSignInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}
