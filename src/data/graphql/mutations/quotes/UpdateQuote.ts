import { gql } from '@apollo/client';

import QuoteFull from 'data/fragments/QuoteFull'; // eslint-disable-line

const UPDATE_QUOTE = gql`
  fragment UpdateQuoteInput on REST {
    quoteId
    policy_holder {
      ...PolicyHolder
    }
    rating_address {
      ...Address
    }
    variable_selections {
      ...VariableSelections
    }
  }

  fragment Address on any { 
    line_1
    line_2
    city
    region
    postal
  }

  fragment PolicyHolder on any {
    last_name
    first_name
  }

  fragment VariableOptions on Quote {
    deductible {
      title
      description
      values
    }
    asteroid_collision {
      title
      description
      values
    }
  }

  fragment VariableSelections on Quote {
    deductible
    asteroid_collision
  }

  fragment QuoteParts on Quote {
    quoteId
    policy_holder: PolicyHolder
    rating_address: Address
    variable_options: VariableOptions
    variable_selections: VariableSelections
    premium
  }

  mutation UpdateQuote($input: UpdateQuoteInput!) {
    updateQuote(input: $input) @rest(
        method: "PUT",
        type: "Quote",
        path: "/quotes/{args.input.quote.quoteId}"
      ) {
      ...QuoteParts
    }
  }
`;

export default UPDATE_QUOTE;
