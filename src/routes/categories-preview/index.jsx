import { useSelector } from 'react-redux'

import { CategoryPreview } from '../../components/category-preview'
import { selectCategory } from '../../store/categories/categorySelector'

export default function CategoriesPreview() {
  const categories = useSelector(selectCategory)

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </>
  )
}
