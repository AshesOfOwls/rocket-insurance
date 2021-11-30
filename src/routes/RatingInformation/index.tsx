import useQuotes from 'data/hooks/queries/quotes'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { H3 } from 'components/atoms/Typography';

import CreateQuoteButtonModal from './CreateQuoteButtonModal';
import QuotesList from './QuotesList';

import s from './RatingInformation.module.css';

export interface RatingInformationProps {}

const RatingInformation = (props: RatingInformationProps) => {

  const quotes = useQuotes();

  return (
    <div>
      <Grid>
        <Row>
          <Col xs={8}>
            <H3>Active Quotes:</H3>
          </Col>
          <Col xs={4} className={s.createQuoteButton}>
            <CreateQuoteButtonModal />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <QuotesList quotes={quotes} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default RatingInformation;
