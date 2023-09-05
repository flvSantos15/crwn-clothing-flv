import './styles.scss'

import { CategoryItem } from '../category-item'

export const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        )
      })}
    </div>
  )
}
