import React from 'react';
import './imageCard.css';

const ImageCard = ({ imageUrl, altText, title, moreLink }) => {
  return (
    <div className="card card-pin">
      <img className="card-img" src={imageUrl} alt={altText} />
      <div className="overlay">
        <h2 className="card-title title">{title}</h2>
        <div className="more">
          <a href={moreLink}>
            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
