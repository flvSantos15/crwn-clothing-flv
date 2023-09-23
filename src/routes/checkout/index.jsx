import { useCallback } from 'react'

import { CheckoutItem } from '../../components/checkout-item'
import { useCart } from '../../contexts/cartContext'

import './styles.scss'

const headerItems = [
  { id: 1, value: 'Product' },
  { id: 2, value: 'Description' },
  { id: 3, value: 'Quantity' },
  { id: 4, value: 'Price' },
  { id: 5, value: 'Remove' }
]

export default function Checkout() {
  const { cartItems, totalPrice } = useCart()

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headerItems.map((item) => {
          return (
            <div className="header-block" key={item.id}>
              <span>{item.value}</span>
            </div>
          )
        })}
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />
      })}
      <span className="total">Total: $ {totalPrice}</span>
    </div>
  )
}
