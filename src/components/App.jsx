import css from './App.module.css';
import userData from '../userData.json';
import { Profile } from './Profile/Profile';

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
    </div>
  );
};
