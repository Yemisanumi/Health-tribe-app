import React from 'react';
import './PageScreen9.css';

const ImportantNotice = () => {
    return (
        <div className='notice-container'>
            <div className='part1'>
                <img src="" alt="" />
                <h3 className='notice'>Important Notice</h3>
            </div>
            <div className='part2'>
                <div className='text-areas'>
                    <p>These documents are essential for listing on the </p>
                    <p>Health Tribe app as a verified specialist.</p>

                    <p>1.Medical License: A clear, legible copy of your </p>
                    <p>valid medical license is required to verify your </p>
                    <p>professional credentials.</p>

                   <p>2. CV (Curriculum Vitae) or Resume: Update your CV </p>
                    <p>to highlight your latest achievements, </p>
                    <p>qualifications, and areas of expertise.</p>

                    <p>3. Proof of identity: Have a digital copy of a </p>
                    <p>government issued identification such as a passport, </p>
                    <p>national ID or drivers license ready for upload. </p>

                    <p>Providing these documents is crucial as we uphold </p>
                    <p>the highest standards of credibility and trust within </p>
                    <p>our community. Once verified, you'll be listed on </p>
                    <p>our platform, ready to offer your expertise to our users.</p>
                </div>
                <div className='skipproceed-areas'>
                    <button className='skip'>Skip</button>
                    <button className='proceed'>Proceed </button>
                </div>
                
                    
                
                

            </div>

        </div>
           
       
    );
  }
  
  export default ImportantNotice;
