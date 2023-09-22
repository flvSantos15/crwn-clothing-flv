import { useNavigate } from 'react-router-dom'

import { useCart } from '../../contexts/cartContext'

import { Button } from '../button'
import { CartItem } from '../cart-item'

import './styles.scss'

export function CartDropdown() {
  const { cartItems } = useCart()
  const navigate = useNavigate()

  const handleRedirectToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />
        })}
      </div>
      <Button onClick={handleRedirectToCheckout}>GO TO CHECKOUT</Button>
    </div>
  )
}
