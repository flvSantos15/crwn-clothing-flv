import { ProductCard } from '../product-card'

import { CategoryPreviewContainer, Preview, Title } from './styles'

export function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={`/${title?.toLowerCase()}`}>{title?.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </Preview>
    </CategoryPreviewContainer>
  )
}
