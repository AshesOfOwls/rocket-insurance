import QuoteRow from './QuoteRow';

import s from './QuotesList.module.css';

export interface QuotesListProps {
  quotes: [any]
}

const QuotesList = (props: QuotesListProps) => {
  const { quotes } = props;

  if (!quotes || !quotes.length) return null;

  return (
    <div className={s.quotesList}>
      <table className={s.quotesListTable}>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {quotes && quotes.map((quote: any) => (
            <QuoteRow quote={quote} />
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default QuotesList;
