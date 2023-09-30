import { CheckoutItem } from '../../components/checkout-item'
import { useCart } from '../../contexts/cartContext'

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './styles'

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
    <CheckoutContainer>
      <CheckoutHeader>
        {headerItems.map((item) => {
          return (
            <HeaderBlock key={item.id}>
              <span>{item.value}</span>
            </HeaderBlock>
          )
        })}
      </CheckoutHeader>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />
      })}
      <Total>Total: $ {totalPrice}</Total>
    </CheckoutContainer>
  )
}
