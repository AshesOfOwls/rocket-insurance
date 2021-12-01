import useQuery from 'data/hooks/useQuery';
import QUOTES_QUERY from 'data/graphql/queries/quotes/Quotes';

const useQuotes = () => {
  const { data, loading } = useQuery(QUOTES_QUERY, {});

  if (loading) return null;
  if (!data || !data.quotes) return [];

  return data.quotes || [];
}

export default useQuotes;