import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Albums = ({ userId, userName }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/profiles/${userId}?populate=albums`);
        const albumsData = response.data.data.attributes.albums.data.map(album => ({
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
    <div>
      <section>
        {userId ? (
          <>
            <h3>{userName} has {albums.length} albums:</h3>
          </>
        ) : (
          <h3>Select a profile to view albums</h3>
        )}
      </section>
      <section>
        {userId && albums.length > 0 && (
          <ul>
            {albums.map((album, index) => (
              <li key={index}>{album.title} - Album {album.number}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

Albums.propTypes = {
  userId: PropTypes.number,
  userName: PropTypes.string,
};

export default Albums;
