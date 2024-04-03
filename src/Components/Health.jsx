import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/PageScreens.css';
import '../Pages/PageScreentwo.css'

const Health = ({ image, title, text, nextPageUrl, currentPage }) => {
  const renderNextPageLink = () => {
    switch (currentPage) {
      case 1:
        return <Link to="/pagetwo" className="next-page">Next Page</Link>;
      case 2:
        return <Link to="/pagethree" className="next-page">Next Page</Link>;
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
          <span className="arrow"><img src="arrow" alt="" /></span>
        </div>
      </div>
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