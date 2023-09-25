import { useCategory } from '../../contexts/categoriesContext'

import { CategoryPreview } from '../../components/category-preview'

export default function CategoriesPreview() {
  const { categories } = useCategory()

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </>
  )
}
