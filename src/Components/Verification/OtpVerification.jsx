import React from 'react';
import './PageScreensix.css';
import otp from '../../assets/otp.png';

const Verification = () => {
    return (
        <div className='verification-component'>
            <div>
                <img src={otp} alt="otp" />
            </div>
            
        </div>       
       
    );
  }
  
  export default Verification;