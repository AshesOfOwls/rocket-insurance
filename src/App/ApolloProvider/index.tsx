import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { RestLink } from 'apollo-link-rest';

export interface ApolloProviderProps {
  children: React.ReactNode,
}

const restLink = new RestLink({
  uri: 'https://fed-challenge-api.sure.now.sh/api/v1',
  responseTransformer: async response => response.json().then((data: any) => data.quote),
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const ApolloProviderWrapper = (props: ApolloProviderProps) => {
  const { children } = props;

  return (
    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>
  );
};

export default ApolloProviderWrapper;
