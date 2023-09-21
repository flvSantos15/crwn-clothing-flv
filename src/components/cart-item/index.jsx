import './styles.scss'

export function CartItem({ cartItem }) {
  return (
    <div className="cart-item-container">
      <img src={cartItem.imageUrl} alt="" />
      <div className="item-details">
        <span className="name">{cartItem.name}</span>
        <span className="price">
          {cartItem.quantity} x ${cartItem.price}
        </span>
      </div>
    </div>
  )
}
