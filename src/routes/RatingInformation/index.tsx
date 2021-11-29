import Button from 'components/atoms/Button';
import CREATE_QUOTE from 'hooks/mutations/quotes/create/mutation';
import { useMutation } from "@apollo/react-hooks";
import { gql } from '@apollo/client';

export interface RatingInformationProps {}

const QUOTES_QUERY = gql`
  query Quotes {
    quotes {
      quoteId
    }
  }
`

const RatingInformation = (props: RatingInformationProps) => {
  const [createQuote, { loading, error }] = useMutation(CREATE_QUOTE, {
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
  });

  const handleCreateQuote = () => {
    return createQuote({
      variables: {
        input: {
          first_name: 'Prairie',
          last_name: 'Johnson',
          address: {
            line_1: "123 Mulberry Lane",
            line_2: "3B",
            city: "Brooklyn",
            region: "NY",
            postal: "11211"
          }
        }
      }
    });
  };

  console.log(loading, error)

  return (
    <Button onClick={handleCreateQuote}>CREATE A QUOTE</Button>
  )
};

export default RatingInformation;
