import { Fragment } from 'react'
import { useCategory } from '../../contexts/categoriesContext'

import { ProductCard } from '../../components/product-card'

import './styles.scss'

export default function Shop() {
  const { categories } = useCategory()

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categories[title].map((product) => {
                return <ProductCard key={product.id} product={product} />
              })}
            </div>
          </Fragment>
        )
      })}
    </Fragment>
  )
}
