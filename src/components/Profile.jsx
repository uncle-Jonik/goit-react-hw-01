import './Profile.css';
import { Stats } from './Profile-stats';

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <div className="avatar-box">
          <img src={image} alt={name} className="avatar" />
        </div>
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <Stats followers={stats.followers} likes={stats.likes} views={stats.views} />
    </div>
  );
};
