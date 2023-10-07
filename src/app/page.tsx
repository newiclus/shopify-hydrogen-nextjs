import { Product } from '@/components/products'
import { getHomeData } from '@/data/api'

export default async function Home() {
  const store = await getHomeData()
  const { data: { shop, products } } = store

  return (
    <main className="container mx-auto min-h-screen px-4">
      <header className="items-center">
        <h1>{shop?.name}</h1>
        <p className="text-gray-500">{shop?.description}</p>
      </header>

      <section className='flex flex-row'>
        {products?.edges.map(({ node }: any) => (
          <Product key={node.id} product={node} />
        ))}
      </section>
    </main>
  )
}
