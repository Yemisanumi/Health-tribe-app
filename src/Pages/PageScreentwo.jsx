import React from 'react'
import Health from '../Components/Health'
import image3  from '../assets/image3.png'
import '../Pages/PageScreens.css';

const PageSreentwo = () => {
    return (
        <div>
            <Health
                image={image3} title="AI Symptom Checker" text="Quickly assesses health concerns using AI algorithms, providing accurate diagnoses and recommendations." currentPage={2} />
        </div>      
    )
}


export default PageSreentwo
   