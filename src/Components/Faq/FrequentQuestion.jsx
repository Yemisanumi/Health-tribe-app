import React, { useState } from 'react';
import './Questions.css';
import dropdownIcon from '../../assets/dropdownIcon.png'
import  dropupicon from '../../assets/dropupicon.png'


 
const FrequentQuestion = () => {
    const [openIndex, setopenIndex] = useState(null);

    const questions = [
        'How does Health Tribe work?',
        'Can i find specialists in specific medical fields through Health Tribe?',
        'Is the AI-driven diagnosis feature reliable?',
        'How can Health Tribe enhance my healthcare experience?',
        'Are there additional features besides connecting with doctors?',
        'Is Health Tribe available for use in multiple locations?'
    ];

    const dropdownContents = [
        `Health Tribe is a mobile application that connects users with a diverse
        network of doctors across different specialties and locations. Users can easily access healthcare services, icluding AI-driven diagnosis,
        health tips, diet plans and recommendations for hospitals, pharmacies and diagnostic centers`,
        `Yes, Health Tribe provides access to doctors from various specialties
        ensuring users can find the specific medical expertise they require`,
        `Health Tribe's AI-driven feature is developed using advanced technology and 
        medical expertise to provide accurate assessments. However, it ois always recommended to consult a healthcare professional 
        for comprehensive evaluation and treatment`,
        `Health Tribe offers seamless and convenient access to healthcare services,
        enabling users to use timely medical assistance, personalized health tips, and recommendations for healthcare facilities,
        ultimately improving overall healthcare experiences`,
        `Yes, Health Tribe offers a diverse range of optiuons including 
        health tips, diet plans and recommendations for healthcare facilities such as hospitals, pharmacies and diagnostic centers
        ensuring comprehensive support for users health needs`,
        `Yes, Health Tribe network of doctors and healthcare facilities, spans various locations, 
        providing users with access to healthcare services regardless of their geographical locations.`
    ]


    return (
        <div className='faq-section'style={{ backgrounndColor:'lightgreen', padding: '20px' }}>
            {questions.map((question, index)=> (
                <div className='form' key={index}>
                <input 
                type="text" 
                className='question'
                placeholder={question}
                readOnly
                onClick={() => setopenIndex(index)}
                style={{ cursor: 'pointer'}}
                />

                <div className='dropdown' onClick={()=> setopenIndex(index)} style={{cursor: 'pointer' }}>
                    <img src={index === openIndex ? dropdownIcon : dropupicon} alt="Dropdown Icon" />
                    {index === openIndex && (
                        <div className='dropdown-content'>{dropdownContents[index]}</div>
            )}
                </div>
            </div>
        ))}
        </div>
    );
};
  
  
export default FrequentQuestion;



