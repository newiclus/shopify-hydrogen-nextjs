import { getStorefrontApiUrl, getPrivateTokenHeaders } from '@/config/shopify-client'
import { GRAPHQL_QUERY } from '@/data/queries'

export async function getHomeData() {
  const response = await fetch(
    getStorefrontApiUrl(),
    {
      body: JSON.stringify({
        // A Storefront API query
        query: GRAPHQL_QUERY,
      }),
      headers: getPrivateTokenHeaders({ buyerIp: '...' }),
      method: 'POST',
    });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
