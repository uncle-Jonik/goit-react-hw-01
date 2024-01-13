import css from './App.module.css';
import userData from '../userData.json';
import userDataFriends from '../userDataFriends.json';
import userDataTransactions from '../userDataTransactions .json';
import { Profile } from './Profile/Profile';
import { Friends } from './Friends/Friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <p className={css.task}>Task 1</p>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <p className={css.task}>Task 2</p>
      <Friends friends={userDataFriends} />

      <p className={css.task}>Task 3</p>
      <TransactionHistory transactions={userDataTransactions} />
    </div>
  );
};
