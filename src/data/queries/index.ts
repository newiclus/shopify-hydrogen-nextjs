export const getHomeDataQuery = `
  query {
    shop {
      name
      description
    }
   	products(first:5) {
      edges {
        node {
          id
          title
          description
        }
      }
    }
    metaobjects(type:"main_home_banner",first:3) {
      nodes {
        handle
        type
        title: field(key: "title") { value }
        description: field(key: "description") { value }
        image: field(key: "image") { value }
        cta: field(key: "cta") { value }
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
