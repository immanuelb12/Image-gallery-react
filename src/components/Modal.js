 
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, src, alt, onClose, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={src} alt={alt} className="modal-image" />
        <button className="prev-button" onClick={onPrev}>‹</button>
        <button className="next-button" onClick={onNext}>›</button>
      </div>
    </div>
  );
};

export default Modal;
