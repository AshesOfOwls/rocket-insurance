import useMutation from 'data/hooks/useMutation';
import UPDATE_QUOTE from 'data/graphql/mutations/quotes/UpdateQuote';
import QUOTES_QUERY from 'data/graphql/queries/quotes/Quotes';

const useUpdateQuote = (onCompleted = () => {}) => {
  const updateQuote = useMutation(UPDATE_QUOTE, {
    update(cache, { data }) {
      if (!data || !data.updateQuote) return;

      const quote = data.updateQuote;

      const cachedData = cache.readQuery<any>({
        query: QUOTES_QUERY,
      }) || { quotes: [] };
      const oldQuotes = cachedData.quotes;

      const quoteIndex = oldQuotes.findIndex((existing: any) => (
        existing.quoteId === quote.quoteId
      ));

      const newQuotes = [...oldQuotes];
      newQuotes[quoteIndex] = quote;
      
      cache.writeQuery({
        query: QUOTES_QUERY,
        data: { quotes: newQuotes },
      });
    },
    onCompleted,
  });

  return updateQuote;
}

export default useUpdateQuote;