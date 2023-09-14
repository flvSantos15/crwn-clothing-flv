import { Routes, Route } from 'react-router-dom'

import Home from './routes/home'
import Navigation from './routes/navigation'
import Authetication from './routes/authetication'
import Shop from './routes/shop'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authetication />} />
      </Route>
    </Routes>
  )
}

export default App
