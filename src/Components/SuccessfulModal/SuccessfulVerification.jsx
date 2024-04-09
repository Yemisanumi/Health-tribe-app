import React from 'react';
import './PageScreen7.css';
import thumbsup from '../../assets/thumbsup.png';

const SuccessfulVerification = () => {
    return (
        <div className='verification-component'>
            <div>
            <img src={thumbsup} alt="thumbsup" />
            </div>
            <div className=''>
                <h2>Verification Successful</h2>
            </div>
            <div>
                <button>Continue</button>
            </div>
        </div>       
       
    );
  }
  
  export default SuccessfulVerification;