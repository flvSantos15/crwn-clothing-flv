import { useCart } from '../../contexts/cartContext'

// import { ReactComponent as ShoopingIcon } from '../../assets/shopping-bag.svg'

import { CartIconContainer, ItemCount, ShoopingIcon } from './styles'

export function CartIcon() {
  const { isCartOpen, setIsCartOpen, itemsAmount } = useCart()

  const handleOpenCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <CartIconContainer onClick={handleOpenCart}>
      {/* <ShoopingIcon className="shopping-icon" /> */}
      <ShoopingIcon />
      <ItemCount>{itemsAmount}</ItemCount>
    </CartIconContainer>
  )
}
