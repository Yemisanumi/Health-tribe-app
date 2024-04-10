import React from 'react';
import './PageScreenfive.css';
import image5 from '../../assets/image5.png';
import logo from '../../assets/logo.png'

const Register = () => {
    return (
        <div className= 'container'>
            <header>
               <img src={logo} alt="logo"className='logo'/>
            </header>   
            <div className='top-design'>
                <img src={image5} alt="image5" className='top-image'/>
            </div>
            <div className='bottom-design'>
                    <h1>Register</h1>
                    <div className='form'>
                        <input type="text" form='' placeholder='Full name' />
                        <input type="text" form='' placeholder='Email' />
                        <input type="text" form='' placeholder='Password' />
                    </div>
                    <div className='bottom-right'>
                        <p className='account'>Have an account?</p>
                        <button className='green-button'>Login</button>
                    </div>
            </div>
        </div>       
       
    );
  }
  
  export default Register;