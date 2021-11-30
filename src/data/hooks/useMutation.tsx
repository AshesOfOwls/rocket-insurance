import { useMutation as useApolloMutation, MutationHookOptions } from "@apollo/react-hooks";
import { DocumentNode } from 'graphql';

const useMutation = (mutation: DocumentNode, options: MutationHookOptions) => {
  const { onCompleted = () => {}, onError = () => {}, ...otherOptions } = options;

  const mutate = useApolloMutation(mutation, {
    onError: (e) => onError(e),
    onCompleted: (data) => onCompleted({ data }),
    ...otherOptions,
  });

  return mutate;
};

export default useMutation;
