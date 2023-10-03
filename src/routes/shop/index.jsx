import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { getCategoriesAndDocuments } from '../../services/firebase'
import { setCategories } from '../../store/categories/categoryAction'

import CategoriesPreview from '../categories-preview'
import Category from '../category'

export default function Shop() {
  const dispatch = useDispatch()

  const getCategoriesMap = async () => {
    const categoryMap = await getCategoriesAndDocuments()
    dispatch(setCategories(categoryMap))
  }

  useEffect(() => {
    getCategoriesMap()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}
