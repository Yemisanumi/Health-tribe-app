import React from 'react';
import './PageScreen8.css';
import personals from '../../assets/personals.png';
import leftarrowss from '../../assets/leftarrowss.png'
import downmenu from '../../assets/downmenu.png'
import vector from '../../assets/vector.png'
import checkbox from '../../assets/checkbox.jpg'


const InformationPersonal = () => {
    return (
        <div className='information-component'>
            <div className={leftarrowss}></div>
            <img src={personals} alt="personals" />
            <div className='buttons'>
                <button>Gender <img src=
                {downmenu} alt="" /></button>
                <button>Date of Birth <img src={vector} alt="vector" /></button>
                <button>Phone No.</button>
            </div>
            <div className='checkbox-container' >
            <div className='checkbox'>
            <img src={checkbox} alt="checkbox" />
            <label>In order to continue, please accept our</label>
            </div>  
            <h4 className='privacy'><strong>policy</strong></h4>
            </div>
            <div>
               <button className='next-button'><span>Next</span></button>
            </div>
            <div className="endline"></div>                 
        </div> 
           
       
    );
  }
  
  export default InformationPersonal;



