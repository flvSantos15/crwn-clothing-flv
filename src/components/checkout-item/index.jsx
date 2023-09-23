import { useCart } from '../../contexts/cartContext'

import './styles.scss'

export function CheckoutItem({ cartItem }) {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useCart()

  const handleClearItem = () => {
    clearItemFromCart(cartItem)
  }

  const handleIncreaseItem = () => {
    addItemToCart(cartItem)
  }
  const handleDecreaseItem = () => {
    removeItemFromCart(cartItem)
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecreaseItem}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={handleIncreaseItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={handleClearItem}>
        &#10005;
      </div>
    </div>
  )
}
