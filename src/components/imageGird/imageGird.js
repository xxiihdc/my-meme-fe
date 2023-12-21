// ImageGrid.js
import React, { useState,useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import apiService from '../../services/apiServices.js';
import SearchBar from '../searchBar/searchBar';
import Modal from '../modal/modalImage';
import './imageGrid.css';

const ImageGrid = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await apiService.get(`/api/v1/meme/index?q=${query}`);
      setFilteredData(response.data.Data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.get(`/api/v1/meme/index`);
        setData(response.data.Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const zoomIn = useSpring({});

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="image-grid">
        {(filteredData.length > 0 ? filteredData : data).map((image) => (
          <div className={`image-container`} key={image?.ID} onClick={() => openModal(image)}>
            <animated.img
              className={`zoom-image`}
              src={'https://drive.google.com/uc?id=' + image?.DriveId} 
              alt={image?.Name}
              style={zoomIn}
            />
            <div className="text-container">
              <p className="animated-text">{image?.Name}</p>
            </div>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      <Modal isOpen={!!selectedImage} onClose={closeModal} title={selectedImage?.Name}>
        <img src={'https://drive.google.com/uc?id=' + selectedImage?.DriveId} alt={selectedImage?.Name} />
      </Modal>
    </div>
  );
};

export default ImageGrid;
