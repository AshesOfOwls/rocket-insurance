import { gql } from '@apollo/client';

const CREATE_QUOTE = gql`
  fragment Address on any { 
    line_1: String
    line_2: String
    city: String
    region: String
    postal: String
  }

  fragment PolicyHolder on any {
    last_name: String
    first_name: String
  }

  fragment QuoteInput on REST {
    ...PolicyHolder
    address {
      ...Address
    }
  }

  fragment QuoteParts on Quote {
    quoteId
  }

  mutation CreateQuote($input: QuoteInput!) {
    createQuote(input: $input) @rest(
        method: "POST",
        type: "Quote",
        path: "/quotes"
      ) {
      ...QuoteParts
    }
  }
`;

export default CREATE_QUOTE;
