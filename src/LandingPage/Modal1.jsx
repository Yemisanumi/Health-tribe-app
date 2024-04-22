// Modal1.jsx
import React from 'react';
import './Modal1.css';
import thumbsup from '../assets/thumbsup.png'
import CLose from '../assets/CLose.svg'

const Modal1 = ({ show, onClose }) => {
  return (
    <>
      {show && (
       <div className="modal">
       <div className="modal-content">
         <span className="close" onClick={onClose}>
         <img src={CLose} alt="Close" />
         </span>
         <img className='thumbsup' src= {thumbsup} alt="Thumbs Up" />
         <p className="text">You have Successfully sent</p>
       </div>
     </div>
      )};
    </>
  );
};

export default Modal1;
