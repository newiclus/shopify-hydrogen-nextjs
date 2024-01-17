"use client";

import React from "react";
import type { Product as ProductType } from "@shopify/hydrogen-react/storefront-api-types";
import { Button } from "@nextui-org/button";

export const Product = ({ product }: { product: ProductType }) => (
  <article key={product.id} className="basis-1/4">
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <Button color="primary">Add to Cart</Button>
  </article>
);
