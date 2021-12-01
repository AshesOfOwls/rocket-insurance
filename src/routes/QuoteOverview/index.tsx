import { useParams } from "react-router-dom";
import { Body, H3, H5, H4 } from 'components/atoms/Typography';
import useQuote from "data/hooks/queries/quote";
import { Grid, Row, Col } from 'react-flexbox-grid';
import CurrencyFormat from 'react-currency-format';

import s from './QuoteOverview.module.css';

export interface QuoteOverviewProps {}

const QuoteOverview = (props: QuoteOverviewProps) => {
  const params = useParams();

  const { quoteId } = params;

  const quote = useQuote(quoteId);

  if (!quote) return <H4>Quote Not Found</H4>;
  
  const address = Object.values(quote.rating_address).join(' ');
  const { first_name, last_name } = quote.policy_holder;
  const { deductible, asteroid_collision } = quote.variable_selections;

  return (

    <Grid>
      <Row>
        <Col xs={12}>
          <H3 style={{ margin: '15px 0' }}>Quote {quoteId}</H3>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <div className={s.dataBox}>
            <H4>Active Policy Overview:</H4>

            <H5 bold={false}>Policy Holder:</H5>
            <Body>{`${first_name} ${last_name}`}</Body>

            <H5 bold={false}>Address:</H5>
            <Body>{ address }</Body>

            <H5 bold={false}>Deductible:</H5>
            <Body><CurrencyFormat value={deductible} prefix="$" displayType="text" /></Body>

            <H5 bold={false}>Asteroid Collision:</H5>
            <Body><CurrencyFormat value={asteroid_collision} prefix="$" displayType="text" /></Body>

            <H5 bold={false}>Premium:</H5>
            <Body><CurrencyFormat value={quote.premium} prefix="$" displayType="text" /></Body>
          </div>
        </Col>
        <Col xs={6}>
          Change policy here
        </Col>
      </Row>
    </Grid>
  );
};

export default QuoteOverview;
