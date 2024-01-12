import css from './Profile.module.css';
import { Stats } from '../Profile-stats/Profile-stats';

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <div className={css.avatarBox}>
          <img src={image} alt={name} className={css.avatar} />
        </div>
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <Stats followers={stats.followers} likes={stats.likes} views={stats.views} />
    </div>
  );
};
