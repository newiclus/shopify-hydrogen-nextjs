import React from "react";
import type { Product as ProductType } from "@shopify/hydrogen-react/storefront-api-types";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export const Product = ({ product }: { product: ProductType }) => (
  <Card
    key={product.id}
    shadow="sm"
    isPressable
    isFooterBlurred
    isHoverable
    className="w-80 h-80 m-3 inline-block bg-stone-200 border-none"
  >
    <Image
      isZoomed
      src={product.featuredImage?.url}
      alt={product.title}
      classNames={{
        img: "z-0 w-full h-full object-cover",
        wrapper: "opacity-90",
      }}
    />
    <CardFooter className="text-center absolute z-10 bottom-0 flex-col bg-stone-800/75">
      <h2 className="text-medium text-white font-bold">{product.title}</h2>
    </CardFooter>
  </Card>
);
