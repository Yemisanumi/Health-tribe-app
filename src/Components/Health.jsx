import React from 'react'
import { Link } from 'react-router-dom';
 
const Health = ({ imageUrl, title, text, nextPageUrl, currentPage }) => (
  <div className="component">
    <img src={imageUrl} alt="Images" className="image" />
    <h2>{title}</h2>
    <p>{text}</p>
    <div className="navigation-indicator">
      <span className={`bar ${currentPage === 1 ? 'active' : ''}`}></span>
      <span className={`bar ${currentPage === 2 ? 'active' : ''}`}></span>
      <span className={`bar ${currentPage === 3 ? 'active' : ''}`}></span>
    </div>
    <Link to={nextPageUrl} className="next-page">Next Page </Link>
  </div>
);
 
export default Health;
