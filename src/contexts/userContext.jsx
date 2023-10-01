import React, { createContext, useContext, useEffect, useReducer } from 'react'

import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener
} from '../services/firebase/auth'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }

    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const { currentUser } = state

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
  }

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
