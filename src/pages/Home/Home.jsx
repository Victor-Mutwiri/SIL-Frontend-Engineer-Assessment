import { useState, useContext } from 'react';
import { UserContext } from '../../components/Usercontext';
import './Home.css';
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
      <div className='profile-card'>
        {user ? (
          <div className="profile">
            <img src={user.picture} alt={user.name} />
            <h4>{user.name}</h4>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button><i className="bi bi-box-arrow-in-right"> Sign Out</i></button>
      </div>
      <div className='userdetails'>
        <section className='profiles'>
          <h3>Users</h3>
          <Users onProfileClick={handleProfileClick}/>
        </section>
        <section className='albums'>
          <Albums userId={selectedUserId} userName={selectedUserName}/>
        </section>
      </div>
    </div>
  );
};

export default Home;
