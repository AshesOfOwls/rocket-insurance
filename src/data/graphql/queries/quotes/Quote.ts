import { gql } from '@apollo/client';

import QuoteFull from 'data/fragments/QuoteFull'; // eslint-disable-line

const QUOTE_QUERY = gql`
  query Quote {
    quote: QuoteFull
  }
`;

export default QUOTE_QUERY;
