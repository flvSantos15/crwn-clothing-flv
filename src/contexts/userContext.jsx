import React, { createContext, useContext, useState, useEffect } from 'react'

import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener
} from '../services/firebase/auth'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubcribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return unsubcribe
  }, [])

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  return context
}
