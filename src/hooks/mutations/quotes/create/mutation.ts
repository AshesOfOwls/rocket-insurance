import { gql } from '@apollo/client';

const CREATE_QUOTE = gql`
  fragment Address on any { 
    line_1: String
    line_2: String
    city: String
    region: String
    postal: String
  }

  fragment QuoteInput on REST { 
    last_name: String
    first_name: String
    address {
      ...Address
    }
  }

  mutation CreateQuote($input: QuoteInput!) {
    createQuote(input: $input) @rest(
        method: "POST",
        type: "Quote",
        path: "/quotes"
      ) {
      quote {
        quoteId
      }
    }
  }
`;

export default CREATE_QUOTE;
