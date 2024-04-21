import React, { useState } from 'react';
import './Questions.css';
import dropdownIcon from '../../assets/dropdownIcon.png';

const FrequentQuestion = () => {
    const [openIndex, setOpenIndex] = useState(null);


    const toggleDropdown = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    const questions = [
        'How does Health Tribe work?',
        'Can I find specialists in specific medical fields through Health Tribe?',
        'Is the AI-driven diagnosis feature reliable?',
        'How can Health Tribe enhance my healthcare experience?',
        'Are there additional features besides connecting with doctors?',
        'Is Health Tribe available for use in multiple locations?'
    ];

    const dropdownContents = [
        `Health Tribe is a mobile application that connects users with a diverse
        network of doctors across different specialties and locations. Users can easily access healthcare services, including AI-driven diagnosis,
        health tips, diet plans, and recommendations for hospitals, pharmacies, and diagnostic centers.`,
        `Yes, Health Tribe provides access to doctors from various specialties
        ensuring users can find the specific medical expertise they require.`,
        `Health Tribe's AI-driven feature is developed using advanced technology and 
        medical expertise to provide accurate assessments. However, it is always recommended to consult a healthcare professional 
        for comprehensive evaluation and treatment.`,
        `Health Tribe offers seamless and convenient access to healthcare services,
        enabling users to use timely medical assistance, personalized health tips, and recommendations for healthcare facilities,
        ultimately improving overall healthcare experiences.`,
        `Yes, Health Tribe offers a diverse range of options including 
        health tips, diet plans, and recommendations for healthcare facilities such as hospitals, pharmacies, and diagnostic centers,
        ensuring comprehensive support for users' health needs.`,
        `Yes, Health Tribe's network of doctors and healthcare facilities spans various locations, 
        providing users with access to healthcare services regardless of their geographical locations.`
    ];

    return (
        <div className='faq-section'>
            {questions.map((question, index) => (
                <div className='form' key={index}>
                    <div className='input-container'>
                        <div
                            className={`question ${index === openIndex ? 'no-border' : ''}`}
                            onClick={() => toggleDropdown(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            {question}
                            <img
                                src={dropdownIcon}
                                alt="Dropdown Icon"
                                className={`dropdown-icon ${index === openIndex ? 'rotate' : ''}`}
                            />
                            {index === openIndex && (
                            <div className='dropdown-content'>{dropdownContents[index]}</div>
                        )}
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FrequentQuestion;
