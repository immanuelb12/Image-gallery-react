 
import React from 'react';
import './ImageItem.css';

const ImageItem = ({ src, alt, onClick }) => {
  return (
    <div className="image-item" onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageItem;
