import React, {useState} from 'react';
import Modal from '../LandingPage/Modal.jsx'
import '../LandingPage/Landing.css'
import logo from '../assets/Logo.svg';
import heroimage from '../assets/Frame 427321576 (1).svg'
import firstquote from '../assets/bi_quote.svg'
import secondquote from '../assets/bi_quote (1).svg'
import arrowsub from '../assets/Arrow_Sub_Right_Up.png'
import doctorpatient from '../assets/image 1602.svg'
import onlinecard from '../assets/Card.svg'
import labtech from '../assets/image 1598.svg'
import andriod from '../assets/Mobile app store badge (2).svg'
import apple from '../assets/Mobile app store badge (1).svg'
import iphone from '../assets/iPhone 15 Pro.svg'
import arrowup from '../assets/Vector (2).svg'
import visa from '../assets/vi 1.svg'
import verve from '../assets/verve 1.svg'
import mastercard from '../assets/master 1.svg'
import logowhite from '../assets/logo (1).svg'
import twitterlogo from '../assets/Frame.svg'
import linkedinlogo from '../assets/Frame (1).svg'
import instagramlogo from '../assets/uil_instagram-alt.svg'
import facebooklogo from '../assets/Frame (2).svg'
import HomePage from '../Pages/HomePage';
import { Link } from 'react-router-dom';
import Testimonials from '../Components/LandingPages/Testimonials';
import FrequentQuestion from '../Components/Faq/FrequentQuestion';
import MessageSection from '../Components/SendMessage/MessageSection'




const Landing = () => {
  const [showModal, setShowModal] = useState(false)

  const close =()=>{setShowModal(false)}
  const open =()=>{setShowModal(true)}

  return (
    <div>
      <header id='header'>
        <div className='header-div-div'>
        
            <img src={logo} alt="Logo" width="50" />
          
          <nav className=''>
            <ul>
              <li><a id="home" href="#hero-div">Home</a></li>
              <li><a className="service-btn" href="#Our-services">Services</a></li>
              <li><a className="about" href="#about-us">About</a></li>
              <li><a className="contact" href="#contact-us-div">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      
      </header>

      <div id="hero-div">
        <div className="hero-content">
          <div className="hero-container">
            <div className="welcome-txt">Welcome to Health Tribe</div>
              <p className="your-health-our">Your Health, Our Priority.</p>
              <div className="connecting-text">Connecting patients with medical practitioners of various specialties, hospitals, laboratories and pharmaceutical centers.</div>
              <div className="numbers">
                <div className='specialists'>1k <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 9H9M9 9H16M9 9V16M9 9V2" stroke="#006763" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg><br /> <span className='specialists2'>Specialists</span> </div>
                <div className='hospitals'>150  <br /> <span className='hospitals2'>Hospitals</span> </div>
                <div className='diagnostic'>200  <br /> <span className='diagnostic2'>Diagnostic Labs</span> </div>
                <div className='pharmacies'>50  <br /> <span className='pharmacies2'>Pharmacies</span> </div>
              </div>
            <Link to ="/pagescreen"><button className="download-app-btn">Download App</button></Link>
            </div>
         </div>

          <div className="hero-image-div">
            <img className='hero-doctor' src= {heroimage} alt="Hero doctor" />
          </div>
      </div>

      <div className="intro-content">
        <p className="intro-content-txt">
          <img className="quote-img" src={firstquote} alt="bi-quote" />
          Health Tribe mobile app is a transformative health platform facilitating seamless connections between patients and doctors via a mobile app, offering convenience, cost-efficiency, and minimized hospital waiting times. By fostering a vibrant community, Health Tribe aims to provide users with effortless access to diverse specialists across various locations, fostering a collaborative ecosystem focused on enhancing healthcare accessibility and delivery.
          <img className="quote-img2" src={secondquote} alt="bi-quote" />
        </p>
      </div>

      <div id="Our-services">
        <div>
          <h3 className="Our-services-txt">Our Services</h3>
          <p className='our-services-para'>Our services are tailored to provide the best user-experience for our clients.</p>
        </div> <br />
        <div  className="slant-txt"> 
          <img src= {onlinecard} alt="discription" />
          <button className="online-online-btn">
          <span className='button-with-rotation1'>Online/In-Person Consultation</span>
            <img src={arrowsub} alt="Arrow_Sub_Right_Up" />
            </button>
            <button className="book-btn">
          <span className='button-with-rotation2'>Book A Diagnostic Test</span>
            <img src={arrowsub} alt="Arrow_Sub_Right_Up" />
            </button>
          <button className="ai-btn">
          <span className='button-with-rotation3'>AI Symptom Checker </span>
           <img src={arrowsub} alt="Arrow_Sub_Right_Up" />
           </button>
          <button className="access-btn">  
          <span className='button-with-rotation4'>Access to Stellar Hospitals </span>
          <img src={arrowsub} alt="Arrow_Sub_Right_Up" />
          </button>
          <button className="Pharmaceutical-btn">
          <span className='button-with-rotation5'>Pharmaceutical Hub </span>
          <img src={arrowsub} alt="Arrow_Sub_Right_Up" />
          </button>
        </div>
      </div>

      <div id="about-us">
        <h2 className="about-heading">About Us</h2>
        
        <div className="img-txt">
          <img className='about-us-img1' src={doctorpatient} alt="doctor patient" />
          <p className='about-us1'>Health Tribe is a health community platform dedicated to connecting patients with doctors, providing real-time consultations, health tracking and premium health services via a mobile app. It aims to promoting a healthy lifestyle and well-being of users through appointment consultations, advice on nutrition, exercise, mental health, and general wellness. For doctors, it provides flexible work hours and give opportunity for freelance work. Members support and inspire each other on their individual health journeys, creating a positive and motivating space.</p>
        </div>
        <div className="img-txt-2">
          <p className='about-us2'>Health Tribe is a mobile application which provides users with seamless and convenient access to a network of doctors from various specialties and locations. It also features AI-driven diagnosis along with more diverse range of options including health tips, diet plans and recommendations for healthcare facilities such as hospitals, pharmacies and diagnostic centers.</p>
          <img className='about-us-img2' src={labtech} alt="lab" />
        </div>
      </div>

      <div className="playstore">
        
          <div className='download-container'>
            <h3><span className='download-txt'>Download</span> <br /> <br />
              <span className='green-health'>HEALTH</span> <span className='yellow-tribe'>TRIBE</span>  <span className='app-today'> APP TODAY!</span></h3>
              <br />
            <p className='your-txt'>Your No. 1 transformative health platform facilitating seamless connections between patients and doctors.</p>
            <br /> <br /> <br /> <br />
              <div className='store-img-img'>
                <Link to ="https://www.figma.com/proto/Zm673SWo1qMxSz1GAaUv2G/Health-Tribe?page-id=2%3A3&type=design&node-id=1469-8336&viewport=-6378%2C2923%2C0.41&t=7MHTWsUwzgUQ4Whx-1&scaling=min-zoom&starting-point-node-id=339%3A3101&show-proto-sidebar=1&mode=design">    
                <img className='andriod' src={andriod} alt="google play" />
                  <img className='apple' src={apple} alt="app store" />
                  </Link>
              </div>
          </div>
          <div className='iphone-img-container'><img className='iphone-img' src={iphone} alt="phone-img" /></div>
        
      </div>

      {/* <div className="contact-us"> */}
        <div id='contact-us-div'>
          <h4 className='contact-us-txt'>Contact Us</h4>
        </div>
        <div>
          <h6 className='faq-txt'>Frequently Asked Questions</h6>
          {/* <FrequentQuestion/> */}

          {/* <p className='faq-que'> */}
            <span className='still-question'>Still have more questions? You can contact our team via</span> <br />
             <span className='faq-info'>healthtribe@gmail.com / +234 801 555 9124</span>

          {/* </p> */}
        </div>
        
        <div className='right-hand-arrow'>
          <a href='#hero-div' className='go-up-btn'>  <img src={arrowup} alt="go up" /></a>
         
        </div>
      <div className="send-message">

        <h4 className='sub-txt'>Subscribe To Our Newsletter</h4>
        <p className='no-spam-zone'>No spam zone. Get latest updates on offers.</p> <br />
        <button className='click-here-underlined' onClick={open}>Click Here</button>
      </div>

      <footer>
      <div className='main-footer'>
      <div>
          <img src={logowhite} alt="Footer Logo" className="footer-logo" />
        </div>
        
        <div>
        <ul className="footer-menu1">
        <li><a className='about-us-txt' href="#0">About Us</a></li>
          <li><a className='privacy-txt' href="#0">Privacy Policy</a></li>
          <li><a className='terms-txt' href="#0">Terms and Conditions</a></li>
        </ul>
        </div>
        <div>
        <ul className="footer-menu2">
          <li><a className='get-txt' href="#0">Get Support</a></li>
          <li><a className='contact-txt' href="#0">Contact Us</a></li>
          <li><a className='faq-footer-txt' href="#0">FAQ</a></li>
        </ul>
        </div>
       
        <div className="payment-logos">
        <div class="anything">
          <div className='payment-txt'>Payment Methods</div>
            <div className='payment-logo-img'>
            <img src={visa} alt="Payment Logo 1" />
            <img src={verve} alt="Payment Logo 2" />
            <img src={mastercard} alt="Payment Logo 3" />
          </div>
        </div> <br /> 
        
          <div class="Stay-txt">Stay Connected</div>
            <div className='logos-flexx'>
                <img src={twitterlogo} alt="twitter logo" />
                <img src={linkedinlogo} alt="linkedin logo" />
                <img src={instagramlogo} alt="instagram logo" />
                <img src={facebooklogo} alt="facebooklogo" />
            </div>
            </div>
        
      </div>
      <br />
      <br />
      <hr  className="transparent-hr"/>
      <br />
      
        <div className="copyright">
        Copyright &copy; 2024 Health Tribe®. All Rights Reserved
        </div>
      </footer>
      {showModal && <Modal isOpen={showModal} onClose={close} />}
    </div>
  );
};

export default Landing;


