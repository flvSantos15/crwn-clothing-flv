import { createContext, useContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../services/firebase'

export const CategoriesContext = createContext({
  categories: {}
})

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState({})

  const getCategoriesMap = async () => {
    const categoryMap = await getCategoriesAndDocuments()
    setCategories(categoryMap)
  }

  useEffect(() => {
    getCategoriesMap()
  }, [])

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  )
}

export const useCategory = () => {
  const context = useContext(CategoriesContext)

  return context
}
