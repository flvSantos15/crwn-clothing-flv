import { useCart } from '../../contexts/cartContext'

import {
  CheckoutItemContainer,
  Arrow,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value
} from './styles'

export function CheckoutItem({ cartItem }) {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useCart()

  const handleClearItem = () => {
    clearItemFromCart(cartItem)
  }

  const handleIncreaseItem = () => {
    addItemToCart(cartItem)
  }

  const handleDecreaseItem = () => {
    removeItemFromCart(cartItem)
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.imageUrl} alt="" />
      </ImageContainer>
      <Name>{cartItem.name}</Name>
      <Quantity>
        <Arrow onClick={handleDecreaseItem}>&#10094;</Arrow>
        <Value>{cartItem.quantity}</Value>
        <Arrow onClick={handleIncreaseItem}>&#10095;</Arrow>
      </Quantity>
      <Price>{cartItem.price}</Price>
      <RemoveButton onClick={handleClearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}
