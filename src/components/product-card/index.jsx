import { useCart } from '../../contexts/cartContext'

import { Button, BUTTON_TYPE_CLASSES } from '../button'

import './styles.scss'

export function ProductCard({ product }) {
  const { addItemToCart } = useCart()

  const handleAddProductToCart = () => {
    addItemToCart(product)
  }

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt="" />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={handleAddProductToCart}
      >
        Add to card
      </Button>
    </div>
  )
}
