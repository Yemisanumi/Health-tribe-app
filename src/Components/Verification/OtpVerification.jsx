import React from 'react';
import './PageScreensix.css';
import otp from '../../assets/otp.png';
import timer from '../../assets/timer.png'


const Verification = () => {
    return (
        <div className='otp-component'>
            <img src={otp} alt="otp" />
            <div className='boxes'>
                <div className='small-boxes'></div>
                <div className='small-boxes'></div>
                <div className='small-boxes'></div>
                <div className='small-boxes'></div>
            </div>
            <button className='timer-button'><img src={timer} alt="" />00:00</button>
            <div className='text-paragraph'>
            <p className='otp-text'>Don't receive an otp?</p>
            <p className='code'>Resend code</p>
            </div>
            <div>
                 <button className='verify-button'><span>Verify</span></button>
            </div>
            <div className="end-line"></div>     
        </div>       
       
    );
  }
  
  export default Verification;