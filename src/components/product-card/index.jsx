import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart } from '../../store/cart/cartAction'
import { selectCartItems } from '../../store/cart/cartSelector'

import { Button, BUTTON_TYPE_CLASSES } from '../button'

import { Footer, Name, Price, ProductCardContainer } from './styles'

export function ProductCard({ product }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const handleAddProductToCart = () => {
    dispatch(addItemToCart(cartItems, product))
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
