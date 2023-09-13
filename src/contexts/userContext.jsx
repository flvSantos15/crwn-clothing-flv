import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

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
