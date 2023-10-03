import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectCategory } from '../../store/categories/categorySelector'
import { ProductCard } from '../../components/product-card'

import { CategoryRouteContainer, CategoryTitle } from './styles'

export default function Category() {
  const { category } = useParams()
  const categories = useSelector(selectCategory)

  const [products, setProducts] = useState(categories[category])

  useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])

  return (
    <>
      <CategoryTitle>{category?.toLocaleUpperCase()}</CategoryTitle>
      <CategoryRouteContainer>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </CategoryRouteContainer>
    </>
  )
}
