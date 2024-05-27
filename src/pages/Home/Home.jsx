import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../components/Usercontext';
import './Home.css';
import { Link } from 'react-router-dom';
import Users from '../../components/users';
import Albums from '../../components/albums';

const Home = () => {
  const { user } = useContext(UserContext);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserName, setSelectedUserName] = useState('');

  const handleProfileClick = (userId, userName) => {
    setSelectedUserId(userId);
    setSelectedUserName(userName);
  };

  return (
    <div className='home'>
      <section className='profiles'>
        <h3>Profiles</h3>
        <Users onProfileClick={handleProfileClick}/>
      </section>
      <section className='albums'>
        <div className='profile-card'>
          {user ? (
            <div className="profile">
              <img src={user.picture} alt={user.name} />
              <h4>{user.name}</h4>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <Link to='/profile'>View Profile?</Link>
        </div>
        <Albums userId={selectedUserId} userName={selectedUserName}/>
      </section>
    </div>
  );
};

export default Home;
