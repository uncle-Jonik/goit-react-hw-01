import css from './Profile-stats.module.css';

export const Stats = ({ followers, likes, views }) => {
  return (
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.value}>{followers}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.value}>{likes}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.value}>{views}</span>
      </li>
    </ul>
  );
};
