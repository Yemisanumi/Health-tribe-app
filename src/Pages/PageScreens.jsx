import React from 'react'
import Health from '../Components/Health'
import image  from '../assets/image.png'
import '../Pages/PageScreens.css';
import '../assets/arrow.jpg'

const PageScreens = () => {
    return (
        <div>
            <Health
                image={image} title="Book a Consultation" text="You can book a consultation for yourself and your family with our arrays of medical professionals" currentPage={1} />
        </div>      
    )
}


export default PageScreens
   