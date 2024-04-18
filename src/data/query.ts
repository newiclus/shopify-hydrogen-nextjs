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
