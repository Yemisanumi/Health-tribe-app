// Modal1.jsx
import React from 'react';
import './Modal1.css';
import thumbsup from '../assets/thumbsup.png'

const Modal1 = ({ onClose }) => {
  return (
    <div className="modal-sect">
      <div className="modal-cont">
        <button className="close-button" onClick={onClose}>X</button>
        <img className="thumbs-up-image" src= {thumbsup} alt="Thumbs Up" />
        <p>Your message has been successfully sent!</p>
      </div>
    </div>
  );
};

export default Modal1;
