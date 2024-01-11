import './Profile.css';

export const Profile = ({ name, tag, location, image }) => {
  return (
    <div className="description">
      <div className="avatar-box">
        <img src={image} alt={name} className="avatar" />
      </div>
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};
