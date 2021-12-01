import { useParams } from "react-router-dom";
import { Body, H2, H3, H5, H4, Small } from 'components/atoms/Typography';
import useQuote from "data/hooks/queries/quote";
import useUpdateQuote from 'data/hooks/mutations/updateQuote';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SelectInput from "components/atoms/Inputs/Select";
import CurrencyFormat from 'react-currency-format';

import s from './QuoteOverview.module.css';

export interface QuoteOverviewProps {}

const QuoteOverview = (props: QuoteOverviewProps) => {
  const params = useParams();
  const [updateQuote, { loading }] = useUpdateQuote();

  const { quoteId } = params;

  const quote = useQuote(quoteId);

  if (!quote) return <H4>Quote Not Found</H4>;
  
  const { rating_address, policy_holder, variable_options, variable_selections } = quote;
  const address = Object.values(rating_address).join(' ');
  const { first_name, last_name } = policy_holder;
  const { deductible, asteroid_collision } = variable_selections;

  const deductibleOptions = variable_options.deductible.values.map((value: string) => ({
    value,
    label: `$${value}`,
  }));
  const activeDeductible = deductibleOptions.filter((option: any) => option.value === deductible);

  const asteroidCollisionOptions = variable_options.asteroid_collision.values.map((value: string) => ({
    value,
    label: `$${value}`,
  }));
  const activeCollision = asteroidCollisionOptions.filter((option: any) => option.value === asteroid_collision);

  const handleUpdateQuote = (newValues: any) => {
    updateQuote({
      variables: {
        input: {
          quote: {
            quoteId,
            rating_address,
            policy_holder,
            variable_selections: {
              ...variable_selections,
              ...newValues
            }
          }
        }
      }
    });
  }
  
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
          <H3 style={{ margin: '0 0 15px' }}>Update policy:</H3>

          <H4 style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }} Element='div'>
            Premium: <H2 inline style={{ margin: '0 10px' }}><CurrencyFormat value={quote.premium} prefix="$" displayType="text" /></H2>
          </H4>

          <SelectInput
            label="Deductible"
            options={deductibleOptions}
            value={activeDeductible}
            onChange={(selection) => { handleUpdateQuote({ deductible: selection.value }); }}
            disabled={loading}
          />
          <Small style={{ margin: '3px 5px 20px' }}>
            { variable_options.deductible.description }
          </Small>

          <SelectInput
            label="Asteroid Collision"
            options={asteroidCollisionOptions}
            value={activeCollision}
            onChange={(selection) => { handleUpdateQuote({ asteroid_collision: selection.value }); }}
            disabled={loading}
          />
          <Small style={{ margin: '3px 5px 20px' }}>
            { variable_options.asteroid_collision.description }
          </Small>
        </Col>
      </Row>
    </Grid>
  );
};

export default QuoteOverview;
