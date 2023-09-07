import { Routes, Route } from 'react-router-dom'

import Home from './routes/home'
import Navigation from './routes/navigation'
import SignIn from './routes/sign-in'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
