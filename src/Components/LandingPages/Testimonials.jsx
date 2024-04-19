import React from 'react';
import './TestifierSection.css';
import Review1 from '../../assets/Review1.png'
import Review2 from '../../assets/Review2.png'
import Review3 from '../../assets/Review3.png'
import Review4 from '../../assets/Review4.png'
import Review5 from '../../assets/Review5.png'
import Review6 from '../../assets/Review6.png'
import Review7 from '../../assets/Review7.png'
import Review8 from '../../assets/Review8.png'


const Testimonials = () => {
    return (
        <div className='testimonials-component'>
            <h1 className='testimonials'>Testimonials</h1>
            <div className='testimonials-grid'>
                <div className='column'>
                    <img src= {Review1} alt="Review1" className='rewiewimage' />
                    <img src= {Review3} alt="Review3" className='rewiewimage' />
                    <img src= {Review6} alt="Review6" className='rewiewimage' />
                </div>
                <div className='column'>
                    <img src= {Review2} alt="Review2" className='rewiewimage' />
                    <img src= {Review4} alt="Review4" className='rewiewimage' />
                </div>
                <div className='column'>
                    <img src= {Review5} alt="Review5" className='rewiewimage' />
                    <img src= {Review7} alt="Review7" className='rewiewimage' />
                    <img src= {Review8} alt="Review8" className='rewiewimage' />
                </div>

            </div>
                            
        </div> 
           
       
    );
  }
  
  export default Testimonials;



