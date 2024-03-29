import {
  getStorefrontApiUrl,
  getPrivateTokenHeaders,
} from "@/config/shopify-client";
import {
  getHomeDataQuery,
  getMenuQuery,
  createCartQuery,
} from "@/data/queries";

export async function getHomeData() {
  const response = await fetch(getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: getHomeDataQuery,
    }),
    headers: getPrivateTokenHeaders({ buyerIp: "..." }),
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export async function getMenu(handle: string) {
  const response = await fetch(getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: getMenuQuery,
      variables: {
        handle,
      },
    }),
    headers: getPrivateTokenHeaders({ buyerIp: "..." }),
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export async function createCart(cartInput: any) {
  const response = await fetch(getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: createCartQuery,
      variables: {
        cartInput,
      },
    }),
    headers: getPrivateTokenHeaders({ buyerIp: "..." }),
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
