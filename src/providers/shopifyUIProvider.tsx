"use client";

import { ShopifyProvider } from "@shopify/hydrogen-react";
import { CartProvider } from "@shopify/hydrogen-react";

const STORE_DOMAIN = process.env.NEXT_PUBLIC_STORE_DOMAIN as string;
const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_STOREFRONT_TOKEN as string;
const API_VERSION = process.env.NEXT_PUBLIC_STOREFRONT_API_VERSION as string;

export function ShopifyUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <ShopifyProvider
      storeDomain={STORE_DOMAIN}
      storefrontToken={STOREFRONT_TOKEN}
      storefrontApiVersion={API_VERSION}
      countryIsoCode="US"
      languageIsoCode="EN"
    >
      <CartProvider
        onLineAdd={() => {
          console.log("a line is being added");
        }}
        onLineAddComplete={() => {
          console.log("a line has been added");
        }}
      >
        {children}
      </CartProvider>
    </ShopifyProvider>
  );
}
