import { gql } from '@apollo/client';

const typeDefs = gql`
  type Quote {
    quoteId: ID
    rating_address: RatingAddress
    policy_holder: PolicyHolder
    variable_options: VariableOptions
    variable_selections: VariableSelections
    premium: Integer
  }

  type RatingAddress {
    line_1: String
    line_2: String
    city: String
    region: String
    postal: String
  }
  
  type PolicyHolder {
    first_name: String
    last_name: String
  }

  type VariableOptions {
    deductible: Deductible
    asteroid_collision: AsteroidCollision
  }

  type Deductible {
    title: String
    description: String
    values: [Integer]
  }

  type AsteroidCollision {
    title: String
    description: String
    values: [Integer]
  }

  type VariableSelections {
    deductible: Integer
    asteroid_collision: Integer
  }
`;

export default typeDefs;
