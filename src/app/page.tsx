import { ScrollShadow } from "@nextui-org/react";

import { getHomeData } from "@/data/api";
import MainHomeBanner from "@/components/banner/mainHome";
import { Product } from "@/components/products";

export default async function Home() {
  const store = await getHomeData();
  const {
    data: { products, metaobjects },
  } = store;

  const bannerData = metaobjects?.nodes;

  return (
    <>
      {bannerData.length && <MainHomeBanner items={bannerData} />}

      <div className="container max-w-7xl px-6 m-auto">
        <ScrollShadow
          orientation="horizontal"
          className="max-w-full relative h-[380px]"
        >
          <section className="absolute flex pt-6">
            {products?.edges.map(({ node }: any) => (
              <Product key={node.id} product={node} />
            ))}
          </section>
        </ScrollShadow>
      </div>
    </>
  );
}
