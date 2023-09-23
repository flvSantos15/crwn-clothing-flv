import React, { createContext, useContext, useState, useEffect } from 'react'

import SHOP_DATA from '../shop-data.js'

export const ProductContext = createContext({
  products: [],
  setProducts: () => []
})

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])

  useEffect(() => {}, [])

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  const context = useContext(ProductContext)

  return context
}
