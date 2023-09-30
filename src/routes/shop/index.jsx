import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../categories-preview'
import Category from '../category'

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}
