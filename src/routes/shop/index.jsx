import { useProduct } from '../../contexts/productContext'

export default function Shop() {
  const { products } = useProduct()

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
          </div>
        )
      })}
    </div>
  )
}
