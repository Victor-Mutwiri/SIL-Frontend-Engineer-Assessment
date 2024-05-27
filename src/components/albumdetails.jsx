import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './albumdetails.css'

const AlbumDetails = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/albums/${albumId}?populate=photo`);
        const albumData = response.data.data;
        setAlbum(albumData);
      } catch (error) {
        console.error('Error fetching album details:', error);
      }
    };

    fetchAlbumDetails();
  }, [albumId]);

  if (!album) {
    return <div>Loading...</div>;
  }

  const { No, Title, photo, Artist } = album.attributes;
  const imageUrl = photo.data.attributes.url;

  return (
    <div className='albumdetails'>
        <h3>Album: {No}</h3>
        <img src={imageUrl} alt={Title} />
        <h4>{Title}</h4>
        <h5>Artist: {Artist}</h5>
    </div>
  );
};

export default AlbumDetails;
