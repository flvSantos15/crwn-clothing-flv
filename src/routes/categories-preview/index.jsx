import { useSelector } from 'react-redux'

import {
  selectCategory,
  selectCategoriesIsLoading
} from '../../store/categories/categorySelector'
import { CategoryPreview } from '../../components/category-preview'
import { Spinner } from '../../components/spinner'

export default function CategoriesPreview() {
  const categories = useSelector(selectCategory)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(categories).map((title) => {
            const products = categories[title]
            return (
              <CategoryPreview key={title} title={title} products={products} />
            )
          })}
        </>
      )}
    </>
  )
}
