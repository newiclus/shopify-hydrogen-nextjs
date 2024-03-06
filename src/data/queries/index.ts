import { MAIN_HOME_BANNER_TYPE } from "@/utils/constants";

export const getHomeDataQuery = `
  query {
    shop {
      name
      description
    }
   	products(first:6) {
      edges {
        node {
          id
          title
          featuredImage {
            altText
            url(transform: { maxWidth: 400, maxHeight: 400, crop: CENTER })
          }
        }
      }
    }
    metaobjects(type:"${MAIN_HOME_BANNER_TYPE}", first:3) {
      nodes {
        handle
        type
        title: field(key: "title") { value }
        description: field(key: "description") { value }
        cta: field(key: "cta") { value }
        display: field(key: "display") { value }
        image: field(key: "image") {
          reference {
            ... on MediaImage {
              image {
                originalSrc
              }
            }
          }
        }
      }
    }
  }
`;

export const getMenuQuery = `
  query Menu ($handle: String!) {
    menu(handle: $handle) {
      id
      handle
      title
      items {
        id
        title
        type
        url
      }
    }
  }
`;

export const createCartQuery = `
  mutation cartCreate($cartInput: CartInput!) {
    cartCreate(input: $cartInput) {
      cart {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;
