import { Product } from '@/components/products'
import { getHomeData } from '@/data/api'

export default async function Home() {
  const store = await getHomeData()
  const { data: { products } } = store

  return (
    <div className="container max-w-7xl px-6 m-auto">
      <section className='flex flex-row'>
        {products?.edges.map(({ node }: any) => (
          <Product key={node.id} product={node} />
        ))}
      </section>
    </div>
  )
}
