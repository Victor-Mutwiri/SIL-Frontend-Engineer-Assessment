import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Users = ({ onProfileClick }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/profiles');
        const profiles = response.data.data.map(profile => ({
          id: profile.id,
          name: profile.attributes.name,
        }));
        setUsers(profiles);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      <h2>Profile Names</h2>
      <ul>
        {users.map((profile) => (
          <li key={profile.id}>
            <a href="#" onClick={() => onProfileClick(profile.id, profile.name)}>{profile.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Users.propTypes = {
  onProfileClick: PropTypes.func.isRequired,
};

export default Users;
