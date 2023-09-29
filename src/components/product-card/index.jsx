import { useCart } from '../../contexts/cartContext'

import { Button, BUTTON_TYPE_CLASSES } from '../button'

import { Footer, Name, Price, ProductCardContainer } from './styles'

export function ProductCard({ product }) {
  const { addItemToCart } = useCart()

  const handleAddProductToCart = () => {
    addItemToCart(product)
  }

  return (
    <ProductCardContainer>
      <img src={product.imageUrl} alt="" />
      <Footer>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={handleAddProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  )
}
