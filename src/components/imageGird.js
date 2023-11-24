import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import SearchBar from './searchBar';
import './imageGrid.css';

const ImageGrid = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(`http://172.16.24.69:8888/api/v1/meme/index?q=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setFilteredData(result.Data);
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
        const response = await fetch('http://172.16.24.69:8888/api/v1/meme/index');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result.Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const zoomIn = useSpring({
    // Your animation configuration goes here
  });

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="image-grid">
        {(filteredData.length > 0 ? filteredData : data).map((image) => (
          <div className={`image-container`} key={image?.ID}>
            <animated.img
              className={`zoom-image`}
              src={'https://drive.google.com/uc?id=' + image?.DriveId} 
              alt={image?.Name}
              style={zoomIn}
            />
            <div className="text-container">
              <p className="animated-text">Your text runs from left to right</p>
            </div>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default ImageGrid;
