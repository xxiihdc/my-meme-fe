// ImageGrid.js
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import apiService from "../../services/apiServices.js";
import SearchBar from "../searchBar/searchBar";
import Modal from "../modal/modalImage";
import "./imageGrid.css";
import ImageCard from "../imageCard/imageCard.jsx";

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
      console.error("Error fetching data:", error);
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
        console.error("Error fetching data:", error);
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
      <div className="container-fluid">
        <div className="row">
          <div className="card-columns">
            {data.map((image) => (
              <div className="card">
                <ImageCard
                  key={image?.ID}
                  imageUrl={"https://drive.google.com/uc?id=" + image?.DriveId}
                  altText={image?.Name}
                  title={image?.Name}
                  moreLink={image.moreLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
