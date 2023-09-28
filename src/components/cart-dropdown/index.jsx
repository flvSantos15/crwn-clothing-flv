import { useNavigate } from 'react-router-dom'

import { useCart } from '../../contexts/cartContext'

import { Button } from '../button'
import { CartItem } from '../cart-item'

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage
} from './styles'

export function CartDropdown() {
  const { cartItems } = useCart()
  const navigate = useNavigate()

  const handleRedirectToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={handleRedirectToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}
