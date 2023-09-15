import { useCart } from '../../contexts/cartContext'

import { ReactComponent as ShoopingIcon } from '../../assets/shopping-bag.svg'

import './styles.scss'

export function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useCart()

  const handleOpenCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className="cart-icon-container" onClick={handleOpenCart}>
      <ShoopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}
