import { CatItemContainer, ItemDetails, Name } from './styles'

export function CartItem({ cartItem }) {
  return (
    <CatItemContainer>
      <img src={cartItem.imageUrl} alt="" />
      <ItemDetails>
        <Name>{cartItem.name}</Name>
        <span className="price">
          {cartItem.quantity} x ${cartItem.price}
        </span>
      </ItemDetails>
    </CatItemContainer>
  )
}
