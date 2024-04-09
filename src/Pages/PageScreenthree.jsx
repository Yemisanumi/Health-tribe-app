import React from 'react'
import Health from '../Components/Health'
import image2  from '../assets/image2.png'
import '../assets/arrow.jpg'

const PageScreenthree = () => {
    return (
        <div>
            <Health
                image={image2} title="Book a Diagnostic Test" text="You can schedule a diagnostic test and have it done in one of our recommended facilities" currentPage={3} />
        </div>      
    )
}

export default PageScreenthree
   
