import { useDispatch, useSelector } from 'react-redux'

import { setIsCartOpen } from '../../store/cart/cartAction'
import {
  selectIsCartOpen,
  selectCartCount
} from '../../store/cart/cartSelector'

import { CartIconContainer, ItemCount, ShoopingIcon } from './styles'

export function CartIcon() {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const itemsAmount = useSelector(selectCartCount)

  const handleOpenCart = () => {
    console.log('carticon', !isCartOpen)
    dispatch(setIsCartOpen(!isCartOpen))
  }

  return (
    <CartIconContainer onClick={handleOpenCart}>
      <ShoopingIcon />
      <ItemCount>{itemsAmount}</ItemCount>
    </CartIconContainer>
  )
}
