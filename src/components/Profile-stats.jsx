import './Profile-stats.css';

export const Stats = ({ followers, likes, views }) => {
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="value">{followers}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="value">{likes}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="value">{views}</span>
      </li>
    </ul>
  );
};
