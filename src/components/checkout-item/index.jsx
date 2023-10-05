import { useDispatch, useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cartSelector'
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart
} from '../../store/cart/cartAction'

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
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const handleClearItem = () => {
    dispatch(clearItemFromCart(cartItems, cartItem))
  }

  const handleIncreaseItem = () => {
    dispatch(addItemToCart(cartItems, cartItem))
  }

  const handleDecreaseItem = () => {
    dispatch(removeItemFromCart(cartItems, cartItem))
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
