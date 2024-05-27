import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/profiles/${userId}?populate=albums`);
        const profile = response.data.data.attributes;
        setUserDetails(profile);
        const albumsData = profile.albums.data.map(album => ({
          id: album.id,
          number: album.attributes.No,
          title: album.attributes.Title,
          photoUrl: album.attributes.photo?.data?.attributes?.url,
        }));
        setAlbums(albumsData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <div className='profile-container'>
      {userDetails ? (
        <>
          <h2>{userDetails.name}</h2>
          <p><b>Username:</b> {userDetails.username}</p>
          <p><b>Email:</b> {userDetails.email}</p>
          <h3>Albums:</h3>
          <ul>
            {albums.map((album, index) => (
              <li key={index}>
                <Link to={`/albums/${album.id}`}>
                  <i className="bi bi-disc-fill"/>  {album.number} {album.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default Profile;
