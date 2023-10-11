import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { signUpStart } from '../../store/user/userAction'

import { FormInput } from '../form-input'
import { Button } from '../button'

import { SignUpContainer } from './styles'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export function SignUpForm() {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (confirmPassword !== password) {
      alert('Passwords do not macth!')
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('error on submit sign up', error.message)
      }
    }
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          required
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}
