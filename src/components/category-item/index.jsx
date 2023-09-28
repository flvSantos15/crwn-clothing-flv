import {
  CategoryContainer,
  BackgroundImage,
  CategoryBodyContainer
} from './styles'

export const CategoryItem = ({ title, imageUrl }) => {
  return (
    <CategoryContainer>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  )
}
