"use strict";

type StorefrontClientProps = {
  /** The host name of the domain (eg: `{shop}.myshopify.com`). */
  storeDomain: string;
  /** The Storefront API delegate access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) and [delegate access token](https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details. */
  privateStorefrontToken?: string;
  /** The Storefront API access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) documentation for more details. */
  publicStorefrontToken?: string;
  /** The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify [API versioning](https://shopify.dev/api/usage/versioning) for more details.  */
  storefrontApiVersion?: string;
  /**
   * Customizes which `"content-type"` header is added when using `getPrivateTokenHeaders()` and `getPublicTokenHeaders()`. When fetching with a `JSON.stringify()`-ed `body`, use `"json"`. When fetching with a `body` that is a plain string, use `"graphql"`. Defaults to `"json"`
   *
   * Can also be customized on a call-by-call basis by passing in `'contentType'` to both `getPrivateTokenHeaders({...})` and `getPublicTokenHeaders({...})`, for example: `getPublicTokenHeaders({contentType: 'graphql'})`
   */
  contentType?: 'json' | 'graphql';
};

type OverrideTokenHeaderProps = Partial<Pick<StorefrontClientProps, 'contentType'>>;

const SFAPI_VERSION = process.env.STOREFRONT_API_VERSION as string;

function createStorefrontClient(props: StorefrontClientProps) {
  const {
    storeDomain,
    privateStorefrontToken,
    publicStorefrontToken,
    storefrontApiVersion = SFAPI_VERSION,
    contentType
  } = props;
  if (!storeDomain) {
    throw new Error(
      H2_PREFIX_ERROR + `\`storeDomain\` is required when creating a new Storefront client.
Received "${storeDomain}".`
    );
  }
  if (storefrontApiVersion !== SFAPI_VERSION) {
    warnOnce(
      `The Storefront API version that you're using is different than the version this build of Hydrogen React is targeting.
You may run into unexpected errors if these versions don't match. Received verion: "${storefrontApiVersion}"; expected version "${SFAPI_VERSION}"`
    );
  }
  const isMockShop = (domain: string) => domain.includes("mock.shop");
  const getShopifyDomain = (overrideProps?: Partial<Pick<StorefrontClientProps, 'storeDomain'>>) => {
    const domain = (overrideProps == null ? void 0 : overrideProps.storeDomain) ?? storeDomain;
    return domain.includes("://") ? domain : `https://${domain}`;
  };
  return {
    /**
     * Creates the fully-qualified URL to your myshopify.com domain.
     *
     * By default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getShopifyDomain({...})`:
     *
     * - `storeDomain`
     */
    getShopifyDomain,

    /**
     * Creates the fully-qualified URL to your store's GraphQL endpoint.
     *
     * By default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getStorefrontApiUrl({...})`:
     *
     * - `storeDomain`
     * - `storefrontApiVersion`
     */
    getStorefrontApiUrl(overrideProps?: Partial<Pick<StorefrontClientProps, 'storeDomain' | 'storefrontApiVersion'>>): string {
      const domain = getShopifyDomain(overrideProps);
      const apiUrl = domain + (domain.endsWith("/") ? "api" : "/api");
      if (isMockShop(domain))
        return apiUrl;
      return `${apiUrl}/${(overrideProps == null ? void 0 : overrideProps.storefrontApiVersion) ?? storefrontApiVersion}/graphql.json`;
    },

    /**
     * Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This method uses the private Server-to-Server token which reduces the chance of throttling but must not be exposed to clients. Server-side calls should prefer using this over `getPublicTokenHeaders()`.
     *
     * By default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getPrivateTokenHeaders({...})`:
     *
     * - `contentType`
     * - `privateStorefrontToken`
     * - `buyerIp`
     *
     * Note that `contentType` defaults to what you configured in `createStorefrontClient({...})` and defaults to `'json'`, but a specific call may require using `graphql`. When using `JSON.stringify()` on the `body`, use `'json'`; otherwise, use `'graphql'`.
     */
    getPrivateTokenHeaders(overrideProps?: OverrideTokenHeaderProps & Pick<StorefrontClientProps, 'privateStorefrontToken'> & { buyerIp?: string }) {
      if (!privateStorefrontToken && !(overrideProps == null ? void 0 : overrideProps.privateStorefrontToken) && !isMockShop(storeDomain)) {
        throw new Error(
          H2_PREFIX_ERROR + "You did not pass in a `privateStorefrontToken` while using `createStorefrontClient()` or `getPrivateTokenHeaders()`"
        );
      }
      const finalContentType = (overrideProps == null ? void 0 : overrideProps.contentType) ?? contentType;
      return {
        // default to json
        "content-type": finalContentType === "graphql" ? "application/graphql" : "application/json",
        "X-SDK-Variant": "hydrogen-react",
        "X-SDK-Variant-Source": "react",
        "X-SDK-Version": storefrontApiVersion,
        "Shopify-Storefront-Private-Token": (overrideProps == null ? void 0 : overrideProps.privateStorefrontToken) ?? privateStorefrontToken ?? "",
        ...(overrideProps == null ? void 0 : overrideProps.buyerIp) ? { "Shopify-Storefront-Buyer-IP": overrideProps?.buyerIp } : {}
      };
    },

    /**
     * Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This method uses the public token which increases the chance of throttling but also can be exposed to clients. Server-side calls should prefer using `getPublicTokenHeaders()`.
     *
     * By default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getPublicTokenHeaders({...})`:
     *
     * - `contentType`
     * - `publicStorefrontToken`
     *
     * Note that `contentType` defaults to what you configured in `createStorefrontClient({...})` and defaults to `'json'`, but a specific call may require using `graphql`. When using `JSON.stringify()` on the `body`, use `'json'`; otherwise, use `'graphql'`.
     */
    getPublicTokenHeaders(overrideProps?: OverrideTokenHeaderProps & Pick<StorefrontClientProps, 'publicStorefrontToken'>) {
      if (!publicStorefrontToken && !(overrideProps == null ? void 0 : overrideProps.publicStorefrontToken) && !isMockShop(storeDomain)) {
        throw new Error(
          H2_PREFIX_ERROR + "You did not pass in a `publicStorefrontToken` while using `createStorefrontClient()` or `getPublicTokenHeaders()`"
        );
      }
      const finalContentType = (overrideProps == null ? void 0 : overrideProps.contentType) ?? contentType ?? "json";
      return getPublicTokenHeadersRaw(
        finalContentType,
        storefrontApiVersion,
        (overrideProps == null ? void 0 : overrideProps.publicStorefrontToken) ?? publicStorefrontToken ?? ""
      );
    }
  };
}

function getPublicTokenHeadersRaw(contentType: 'graphql' | 'json', storefrontApiVersion: string, accessToken: string) {
  return {
    // default to json
    "content-type": contentType === "graphql" ? "application/graphql" : "application/json",
    "X-SDK-Variant": "hydrogen-react",
    "X-SDK-Variant-Source": "react",
    "X-SDK-Version": storefrontApiVersion,
    "X-Shopify-Storefront-Access-Token": accessToken
  };
}
const warnings = /* @__PURE__ */ new Set();
const H2_PREFIX_ERROR = "[h2:error:createStorefrontClient] ";
const H2_PREFIX_WARN = "[h2:warn:createStorefrontClient] ";
const warnOnce = (string: string) => {
  if (!warnings.has(string)) {
    console.warn(H2_PREFIX_WARN + string);
    warnings.add(string);
  }
};

export {
  createStorefrontClient,
  getPublicTokenHeadersRaw,
}
