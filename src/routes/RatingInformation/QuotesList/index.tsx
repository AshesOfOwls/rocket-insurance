import QuoteRow from './QuoteRow';
import { H5 } from 'components/atoms/Typography';

import s from './QuotesList.module.css';

export interface QuotesListProps {
  quotes: [any]
}

const QuotesList = (props: QuotesListProps) => {
  const { quotes } = props;

  if (!quotes) return null;

  return (
    <div className={s.quotesList}>
      {!quotes.length && (<H5 style={{ margin: '55px 0'}}>No quotes created yet.</H5>)}
      {quotes.length > 0 && (
        <table className={s.quotesListTable}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote: any) => (
              <QuoteRow quote={quote} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
};

export default QuotesList;
