import { ScrollShadow } from "@nextui-org/scroll-shadow";

import HomeService from "@/modules/home/service";
import { MainHomeBanner, TestimonialsBanner } from "@/modules/home/banner";
import { Product } from "@/components/product";

const homeService = new HomeService();

export default async function Home() {
  const store = await homeService.getData();
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

      <div className="bg-stone-100 pt-6 pb-6">
        <div className="container max-w-7xl px-6 m-auto overflow-hidden">
          <TestimonialsBanner />
        </div>
      </div>
    </>
  );
}
