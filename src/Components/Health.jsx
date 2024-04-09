import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/PageScreens.css';
import '../Pages/PageScreentwo.css'
import '../Pages/PageScreenthree.css'

const Health = ({image, arrowicon, arrowleft, title, text, nextPageUrl, currentPage }) => {
  const renderNextPageLink = () => {
    switch (currentPage) {
      case 1:
        return <Link to="/pagetwo" className="arrowicon">next-page</Link>;
      case 2:
        return <Link to="/pagethree" className="arrowicon">next-page</Link>;
      default:
        return null;
    }
  };

  return (
    <div className="component">
      <img src={image} alt="Images" className="image" />
      <div className="linescontainer">
        <div className="line1"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="textbox">
        <div className="textarea"> 
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="circle">
           <div className="innercircle">
           <img src={arrowicon} alt="" className="arrowicon" />
           </div>
        </div>
        <div className='arrowskip'>
          <img src={arrowleft} alt="" className="arrowleft"/>
          <p className="skip">Skip</p>
        </div>
        <div className="lastline"></div>
      </div>
      
      <div className="navigation-indicator">
      {[1, 2, 3].map(pageNumber => (
          <span key=  {pageNumber} className={`bar ${currentPage === pageNumber ? 'active' : ''}`}></span>
        ))}
      </div>
      {renderNextPageLink()}
    </div>
  );
};

export default Health;