import { createStorefrontClient } from "@/config/create-storefront-client";

const client = createStorefrontClient({
  privateStorefrontToken: process.env.PRIVATE_STOREFRONT_TOKEN,
  storeDomain: process.env.STORE_DOMAIN as string,
  storefrontApiVersion: process.env.STOREFRONT_API_VERSION,
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
