import Avatar from 'components/atoms/Avatar';
import s from './QuoteRow.module.css';

export interface QuoteRowProps {
  quote: any,
};

const QuoteRow = (props: QuoteRowProps) => {
  const { quote } = props;

  if (!quote) return null;

  return (
    <tr className={s.quoteRow} key={quote.quoteId}>
      <td className={s.shrink}>
        <Avatar
          firstName={quote.policy_holder.first_name}
          lastName={quote.policy_holder.last_name}
        />
      </td>
      <td>
        {quote.quoteId}
      </td>
    </tr>
  )
};

export default QuoteRow;
