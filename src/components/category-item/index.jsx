import { CategoryContainer, BackgroundImage, Body } from './styles'

export const CategoryItem = ({ title, imageUrl }) => {
  return (
    <CategoryContainer>
      <BackgroundImage image={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  )
}
