import { useCart } from '../../contexts/cartContext'

import { CartIconContainer, ItemCount, ShoopingIcon } from './styles'

export function CartIcon() {
  const { isCartOpen, setIsCartOpen, itemsAmount } = useCart()

  const handleOpenCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <CartIconContainer onClick={handleOpenCart}>
      <ShoopingIcon />
      <ItemCount>{itemsAmount}</ItemCount>
    </CartIconContainer>
  )
}
