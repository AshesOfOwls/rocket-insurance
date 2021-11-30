import { gql } from '@apollo/client';

import QuoteFull from 'data/fragments/QuoteFull'; // eslint-disable-line

const QUOTES_QUERY = gql`
  query Quotes {
    quotes: QuoteFull
  }
`;

export default QUOTES_QUERY;
