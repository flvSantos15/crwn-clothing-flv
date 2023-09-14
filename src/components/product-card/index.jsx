import { Button } from '../button'

import './styles.scss'

export function ProductCard({ product }) {
  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt="" />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  )
}
