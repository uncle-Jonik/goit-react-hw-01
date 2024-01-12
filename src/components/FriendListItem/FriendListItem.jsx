import css from './FriendListItem.module.css';
// import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={css.status}>{isOnline ? 'online' : 'ofline'}</p>
    </div>
  );
};
