import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
  selectCategory,
  selectCategoriesIsLoading
} from '../../store/categories/categorySelector'
import { ProductCard } from '../../components/product-card'
import { Spinner } from '../../components/spinner'

import { CategoryRouteContainer, CategoryTitle } from './styles'

export default function Category() {
  const { category } = useParams()
  const categories = useSelector(selectCategory)
  const isLoading = useSelector(selectCategoriesIsLoading)

  const [products, setProducts] = useState(categories[category])

  useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])

  return (
    <>
      <CategoryTitle>{category?.toLocaleUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryRouteContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />
            })}
        </CategoryRouteContainer>
      )}
    </>
  )
}
