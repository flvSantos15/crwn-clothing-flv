import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useCategory } from '../../contexts/categoriesContext'

import './styles.scss'
import { ProductCard } from '../../components/product-card'

export default function Category() {
  const { category } = useParams()
  const { categories } = useCategory()

  const [products, setProducts] = useState(categories[category])

  useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])

  return (
    <>
      <h2 className="category-title">{category?.toLocaleUpperCase()}</h2>
      <div className="category-route-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </div>
    </>
  )
}
