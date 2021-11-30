import { useQuery as useApolloQuery, QueryHookOptions } from "@apollo/react-hooks";
import { DocumentNode } from 'graphql';

const useQuery = (query: DocumentNode, options: QueryHookOptions) => {
  const { onCompleted = () => {}, onError = () => {}, ...otherOptions } = options;

  const data = useApolloQuery(query, {
    onError: (e) => onError(e),
    onCompleted: (data) => onCompleted({ data }),
    ...otherOptions,
    fetchPolicy: 'cache-only',
  });

  return data;
};

export default useQuery;
