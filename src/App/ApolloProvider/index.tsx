import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { gql } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

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

const restLink = new RestLink({
  uri: 'https://fed-challenge-api.sure.now.sh/api/v1',
  responseTransformer: async response => response.json().then((data: any) => data.quote),
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  typeDefs,
});

export interface ApolloProviderProps {
  children: React.ReactNode,
}

const ApolloProviderWrapper = (props: ApolloProviderProps) => {
  const { children } = props;

  return (
    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>
  );
};

export default ApolloProviderWrapper;
