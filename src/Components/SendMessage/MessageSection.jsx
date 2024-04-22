import React, { useState } from 'react';
import './Message.css';
import doctorpix from '../../assets/doctorpix.png';
import Modal1 from '../../LandingPage/Modal1';


  const SendMessageSection = () => {

    const [openModal, setOpenModal] = useState(false)

    const close =()=>{setOpenModal(false)}
    const open =()=>{setOpenModal(true)}
    
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    open() 
  };
  
  

  return (
    <div className='send-message-section'>
      <div className='left-part'>
        <div className='left-box'>
          <h2 className='header-message'>Send A Message</h2>
          <form action="">
            <input type="text" placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <input className='message-input' type='Type your message' placeholder='Type your message' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className='send-button' onClick={handleSubmit}> <span> Send Message </span></button>
          </form>
        </div>
      </div>
        <div className='right-part'>
          <img src={doctorpix} alt="doctorpicture" className='doctor-pix' />
        </div>
        <Modal1 show = {openModal} onClose ={close}/>
    </div>
  );
};

export default SendMessageSection;



