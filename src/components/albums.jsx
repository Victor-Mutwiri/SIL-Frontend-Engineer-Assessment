import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './albums.css'

const Albums = ({ userId, userName }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        /* const response = await axios.get(`http://localhost:1337/api/profiles/${userId}?populate=albums`); */
        const response = await axios.get(`${import.meta.env.DEV ? import.meta.env.VITE_DEV_API_BASE_URL : import.meta.env.VITE_PROD_API_BASE_URL}/profiles/${userId}?populate=albums`);
        const albumsData = response.data.data.attributes.albums.data.map(album => ({
          id: album.id,
          number: album.attributes.No,
          title: album.attributes.Title,
        }));
        setAlbums(albumsData);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    if (userId) {
      fetchAlbums();
    }
  }, [userId]);

  return (
    <div className='albumlist'>
      {userId ? (
        <>
          <h3>{userName} has {albums.length} albums <i className="bi bi-disc-fill"/>:</h3>
          <Link to={`/profiles/${userId}`}>View {userName}'s' profile</Link>
          <ul>
            {albums.map((album, index) => (
              <li key={index} className='singles'>
                <Link to={`/albums/${album.id}`}> <i className="bi bi-disc-fill"/>  {album.number} {album.title}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3>Select a profile to view albums</h3>
      )}
    </div>
  );
};

Albums.propTypes = {
  userId: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Albums;
