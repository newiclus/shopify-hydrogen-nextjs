import { createStorefrontClient } from "@/config/create-storefront-client";

const client = createStorefrontClient({
  privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN,
  storeDomain: process.env.PUBLIC_STORE_DOMAIN as string,
  publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
  storefrontApiVersion: process.env.STOREFRONT_API_VERSION,
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
