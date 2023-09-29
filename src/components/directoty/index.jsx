import { DirectoryContainer } from './styles'

import { CategoryItem } from '../category-item'

export const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        )
      })}
    </DirectoryContainer>
  )
}
