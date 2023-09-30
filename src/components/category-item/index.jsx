import { useNavigate } from 'react-router-dom'

import { CategoryContainer, BackgroundImage, Body } from './styles'

export const CategoryItem = ({ title, imageUrl, route }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(route)
  }

  return (
    <CategoryContainer onClick={handleNavigate}>
      <BackgroundImage image={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  )
}
