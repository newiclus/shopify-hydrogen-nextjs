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
  mutation CartCreate ($cartInput: CartInput!) {
    cartCreate(input: $cartInput) {
      cart {
     	  id
        createdAt
        updatedAt
      }
      userErrors {
        field
        message
      }
    }
  }
`;
