import { gql } from '@apollo/client';

const CREATE_QUOTE = gql`
  fragment QuoteInput on REST {
    ...PolicyHolder
    address {
      ...Address
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
