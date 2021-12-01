import useQuery from 'data/hooks/useQuery';
import QUOTES_QUERY from 'data/graphql/queries/quotes/Quote';

const useQuote = (quoteId?: string) => {
  const { data, loading } = useQuery(QUOTES_QUERY, {
    variables: { quoteId: quoteId }
  });

  if (loading) return null;
  if (!data || !data.quote[0]) return null;

  return data.quote[0];
}

export default useQuote;