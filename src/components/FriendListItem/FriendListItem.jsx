import css from './FriendListItem.module.css';
import { LuDiamond } from 'react-icons/lu';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(css.status, {
          [css.isOnline]: isOnline,
          [css.isOfline]: !isOnline,
        })}
      >
        <LuDiamond />
        {isOnline ? 'online' : 'ofline'}
      </p>
    </div>
  );
};
