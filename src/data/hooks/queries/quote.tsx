import useQuery from 'data/hooks/useQuery';
import QUOTES_QUERY from 'data/graphql/queries/quotes/Quotes';

const useQuote = (quoteId?: string) => {
  const { data, loading, error } = useQuery(QUOTES_QUERY, {});

  if (loading) return null;
  if (!data || !data.quotes.length) return null;

  const quote = data.quotes.find((existingQuote: any) => (
    existingQuote.quoteId === quoteId
  ));

  return quote;
}

export default useQuote;