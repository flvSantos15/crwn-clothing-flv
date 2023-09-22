import { Routes, Route } from 'react-router-dom'

import Home from './routes/home'
import Navigation from './routes/navigation'
import Authetication from './routes/authetication'
import Shop from './routes/shop'
import Checkout from './routes/checkout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authetication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
