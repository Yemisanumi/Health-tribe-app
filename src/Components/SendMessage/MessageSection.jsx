import React, {useState} from 'react';
import './Message.css';
import doctorpix from '../../assets/doctorpix.png'

const SendMessageSection = () => {
    const [fullName, setFullName] = useState ('');
    const [email, setEmail] = useState ('');
    const [phoneNumber, setPhoneNumber] = useState ('');
    const [message, setMessage] = useState ('');
  

  const handleSendMessage = () => {
    window.open ('', 'Successful', 'width=200','height=100');
  };

  return (
    <div className='send-message-section'>
      <div className='left-part'>
        <h2 className='header-message'>Send A Message</h2>
        <div className='input-container'> 
          <input type="text" placeholder='Full Name' value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
        </div>
        <div className='input-container'>   
          <input type="email"  placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='input-container'>
          <input type="tel"  placeholder='Phone Number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
        </div>
        <div className='input-container'>
          <input type='Type your message'  placeholder='Type your message' value={message} onChange={(e)=>setMessage(e.target.value)} />
        </div>
        <button className='send-button' onClick={handleSendMessage}>Send Message</button>
      </div>
      <div className='right-part'>
        <img src={doctorpix} alt="doctor picture" />
        
      </div>
    </div>
  );
};
  
  export default SendMessageSection;



