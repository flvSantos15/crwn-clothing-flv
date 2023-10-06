import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { fetchCategoriesAsync } from '../../store/categories/categoryAction'

import CategoriesPreview from '../categories-preview'
import Category from '../category'

export default function Shop() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}
