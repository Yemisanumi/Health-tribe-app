import React from 'react';
import './PageScreen7.css';
import thumbsup from '../../assets/thumbsup.png';

const SuccessfulVerification = () => {
    return (
        <div className='verification-component'>
            <div className='verification-box'>
               <img src={thumbsup} alt="thumbsup" className='thumbsup'/>
               <h2 className='verification-text'>Verification Successful</h2>
               <button className='green-button'><span>Continue</span></button>
            </div> 
        </div>         
    );
  }
  
  export default SuccessfulVerification;