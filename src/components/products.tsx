'use client'

import type { Product } from '@shopify/hydrogen-react/storefront-api-types'
import { Button } from '@nextui-org/button'

export function Product({ product }: { product: Product }) {
  return (
    <article key={product.id} className='basis-1/4'>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Button color='primary'>Add to Cart</Button>
    </article>
  );
}
