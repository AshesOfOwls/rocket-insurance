import useMutation from 'data/hooks/useMutation';
import CREATE_QUOTE from 'data/graphql/mutations/quotes/CreateQuote';
import QUOTES_QUERY from 'data/graphql/queries/quotes/Quotes';

const useCreateQuote = (onCompleted = () => {}) => {
  const createQuote = useMutation(CREATE_QUOTE, {
    update(cache, { data }) {
      if (!data || !data.createQuote) return;

      const quote = data.createQuote;

      const cachedData = cache.readQuery<any>({
        query: QUOTES_QUERY,
      }) || { quotes: [] };

      cache.writeQuery({
        query: QUOTES_QUERY,
        data: { quotes: [...cachedData.quotes, quote] },
      });
    },
    onCompleted,
  });

  return createQuote;
}

export default useCreateQuote;