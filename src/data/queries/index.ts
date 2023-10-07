export const GRAPHQL_QUERY = `
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
