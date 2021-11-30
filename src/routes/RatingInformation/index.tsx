import Button from 'components/atoms/Button';
import useCreateQuote from 'data/hooks/mutations/createQuote';
import useQuotes from 'data/hooks/queries/quotes'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { H3 } from 'components/atoms/Typography';

import s from './RatingInformation.module.css';

export interface RatingInformationProps {}

const RatingInformation = (props: RatingInformationProps) => {
  const [createQuote, { loading, error }] = useCreateQuote();

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

  const quotes = useQuotes();

  return (
    <Grid>
      <Row>
        <Col xs={8}>
          <H3>
            Active Quotes: 
          </H3>
        </Col>
        <Col xs={4} className={s.createQuoteButton}>
          <Button onClick={handleCreateQuote}>
            CREATE A QUOTE
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {quotes && quotes.map((quote: any) => (
              <div key={quote.quoteId}>{ quote.quoteId }</div>
          ))}
        </Col>
      </Row>
    </Grid>
  );
};

export default RatingInformation;
