import Button from 'components/atoms/Button';
import CREATE_QUOTE from 'hooks/mutations/quotes/create/mutation';
import { useMutation } from "@apollo/react-hooks";

export interface RatingInformationProps {}

const RatingInformation = (props: RatingInformationProps) => {
  const [createQuote, { loading, error }] = useMutation(CREATE_QUOTE, {
    update(cache, { data }) {
      if (!data || !data.createQuote) return;

      const quote = data.createQuote;

      console.log(quote)
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
