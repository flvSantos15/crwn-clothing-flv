import { useProduct } from '../../contexts/productContext'

import { ProductCard } from '../../components/product-card'

import './styles.scss'

export default function Shop() {
  const { products } = useProduct()

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}
