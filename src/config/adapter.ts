import {
  getStorefrontApiUrl,
  getPrivateTokenHeaders,
} from "@/config/shopify-client";

function initOptions(query: string, variables?: { [key: string]: string }) {
  return {
    body: JSON.stringify({
      query,
      variables,
    }),
    method: "POST",
    headers: getPrivateTokenHeaders({ buyerIp: "..." }),
  };
}

class ShopifyAdapter {
  async getData(query: string) {
    const options = initOptions(query);
    const response = await fetch(getStorefrontApiUrl(), options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  async getMenu(menuQuery: string, handle: string) {
    const options = initOptions(menuQuery, { handle });
    const response = await fetch(getStorefrontApiUrl(), options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  async createCart(cartQuery: string, cartInput: any) {
    const options = initOptions(cartQuery, { cartInput });
    const response = await fetch(getStorefrontApiUrl(), options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  async getCart(cartQuery: string, cartId: string) {
    const options = initOptions(cartQuery, { cartId });
    const response = await fetch(getStorefrontApiUrl(), options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }
}

const shopifyAdapter = new ShopifyAdapter();

export default shopifyAdapter;
