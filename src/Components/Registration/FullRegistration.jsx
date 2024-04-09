import React from 'react';
import './PageScreenfour.css';
import image4 from '../../assets/image4.png';

const FullRegistration = () => {
    return (
        <div className='main-component'>
            <div>
            <img src={image4} alt="image4" />
            </div>
            <div className='button-container'>
                <div className='left-buttons'>
                <button className='button1'>Register as a Specialist</button>
                <button className='button2'>Register as a Patient</button>
                </div>
                <button className='button3'>Login</button>
            </div>
        </div>       
       
    );
  }
  
  export default FullRegistration;