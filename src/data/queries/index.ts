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
