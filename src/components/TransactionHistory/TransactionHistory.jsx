import css from './TransactionHistory.module.css';
import { TransactionValue } from '../TransactionValue/TransactionValue';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {transactions.map(item => {
          return (
            <tr key={item.id}>
              <TransactionValue type={item.type} amount={item.amount} currency={item.currency} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
