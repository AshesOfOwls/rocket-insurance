import { gql } from '@apollo/client';

import QuoteFull from 'data/fragments/QuoteFull'; // eslint-disable-line

const QUOTE_QUERY = gql`
  query Quote($quoteId: String!) {
    quotes(quoteId: $quoteId) {
      quoteId
    }
  }
`;

export default QUOTE_QUERY;
