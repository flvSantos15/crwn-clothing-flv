import { ReactComponent as ShoopingIcon } from '../../assets/shopping-bag.svg'

import './styles.scss'

export function CartIcon() {
  return (
    <div className="cart-icon-container">
      <ShoopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}
