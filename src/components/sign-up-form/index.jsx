import { useState } from 'react'

export function SignUpForm() {
  const [formFields, setFormFields] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>

      <form onSubmit={() => {}}>
        {/* componetizar essas parte */}
        <label>Display Name</label>
        <input
          name="displayName"
          type="text"
          required
          value={displayName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
