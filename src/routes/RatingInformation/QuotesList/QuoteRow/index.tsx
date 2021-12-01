import { useNavigate } from "react-router-dom";
import Avatar from 'components/atoms/Avatar';
import Button from 'components/atoms/Button';
import CurrencyFormat from 'react-currency-format';

import s from './QuoteRow.module.css';

export interface QuoteRowProps {
  quote: any,
};

const QuoteRow = (props: QuoteRowProps) => {
  const { quote } = props;
  const navigate = useNavigate();

  if (!quote) return null;

  const { rating_address } = quote;

  const address = Object.values(rating_address).join(' ');

  return (
    <tr className={s.quoteRow} key={quote.quoteId}>
      <td className={s.shrink}>
        <Avatar
          firstName={quote.policy_holder.first_name}
          lastName={quote.policy_holder.last_name}
        />
      </td>
      <td className={s.shrink}>
        {`${quote.policy_holder.first_name} ${quote.policy_holder.last_name}`}
      </td>
      <td>
        { address }
      </td>
      <td>
        <CurrencyFormat value={quote.premium} prefix="$" displayType="text" />
      </td>
      <td className={s.shrink}>
        <Button onClick={() => navigate(`/quotes/${quote.quoteId}`)}>{quote.quoteId} Edit Quote</Button>
      </td>
    </tr>
  )
};

export default QuoteRow;
