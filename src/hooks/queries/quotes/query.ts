import { gql } from '@apollo/client';

const query = gql`
  query Quote($quoteId: String!) {
    quote @rest(type: "Quote", path: "/quotes/$quoteId") {
      quoteId
      name
    }
  }
`;

export default query;
