import css from './Friends.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const Friends = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => {
        return (
          <li key={item.id}>
            <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
          </li>
        );
      })}
    </ul>
  );
};
