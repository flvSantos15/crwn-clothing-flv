import { DirectoryContainer } from './styles'

import categories from '../../categories.json'
import { CategoryItem } from '../category-item'

export const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
            route={category.route}
          />
        )
      })}
    </DirectoryContainer>
  )
}
