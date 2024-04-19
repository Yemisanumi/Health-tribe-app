// Modal.jsx
import React, { useState } from 'react';
import './Modal.css';
import xdisplay from '../assets/CLose.svg'

const Modal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    // Close modal after subscribing
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
            <div className="modal-content">
                <h1>Subscribe to our newsletter</h1>
                <div className="modal-spam-text">No spam zone. Get latest updates on offers.</div>
                    <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="custom-input"
                    />
                    <button className='subscribe-btn' onClick={handleSubscribe}>Subscribe</button>
                        {/* <button onClick={onClose}>Close</button> */}
                    <div className="close-icon" onClick={onClose}>
                         <img src={xdisplay} alt="Close" />
                    </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
