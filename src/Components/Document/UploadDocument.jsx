import React from 'react';
import './PageScreenten.css';
import uploads from '../../assets/uploads.png';
import cloud from '../../assets/cloud.png'
import basebutton from '../../assets/basebutton.png'

const UploadDocument = () => {
    return (
        <div className='document-component'>
            <img src={uploads} alt="" className='upload-img' />
            <div className='credentials-container'>
                <div className='credentials'>
                    <img src= {cloud} alt="cloud" className='cloud' />
                    <h4 className='heading'>Medical License</h4>
                    <p className='para-text'>Upload a valid and current
                        medical license issued by the
                        appropriate regulatory authority.
                    </p>
                    <img src={basebutton} alt="basebutton" className='basebutton' />
                </div>
                <div className='credentials'>
                    <img src= {cloud} alt="cloud" className='cloud' />
                    <h4 className='heading'>Curriculum Vitae (CV) or Resume</h4>
                    <p className='para-text'>Upload a detailed summary of your education, training, work experience, and professional achievements in the field of medicine..
                    </p>
                    <img src={basebutton} alt="basebutton" className='basebutton' />
                </div>
                <div className='credentials'>
                    <img src={cloud} alt="cloud" className='cloud' />
                    <h4 className='heading'>Proof of Identity</h4>
                    <p className='para-text'>Upload a Government-issued identification such as a passport or driver's license
                    </p>
                    <img src={basebutton} alt="basebutton" className='basebutton' />
                </div>
            </div>
        </div>
    );
}

export default UploadDocument;
