import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener
} from './services/firebase/auth'
import { setCurrentUser } from './store/user/userAction'

import Home from './routes/home'
import Navigation from './routes/navigation'
import Authetication from './routes/authetication'
import Shop from './routes/shop'
import Checkout from './routes/checkout'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubcribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return unsubcribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authetication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
