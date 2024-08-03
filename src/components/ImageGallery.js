 
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <ImageItem key={index} src={src} alt={`Image ${index + 1}`} onClick={() => openModal(index)} />
      ))}
      <Modal
        isOpen={currentIndex !== null}
        src={currentIndex !== null ? images[currentIndex] : ''}
        alt={`Image ${currentIndex + 1}`}
        onClose={closeModal}
        onPrev={showPrev}
        onNext={showNext}
      />
    </div>
  );
};

export default ImageGallery;
