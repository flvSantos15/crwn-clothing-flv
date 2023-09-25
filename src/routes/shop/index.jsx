import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../categories-preview'
import './styles.scss'

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  )
}
