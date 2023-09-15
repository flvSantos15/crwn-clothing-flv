import { Button } from '../button'

import './styles.scss'

export function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}
