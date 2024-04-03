import React from 'react'
import Health from '../Components/Health'
import image  from '../assets/image.jpg'

const PageScreenthree = () => {
    return (
        <div>
            <Health
                image={image} title="Book a Diagnostic Test" text="You can schedule a diagnostic test and have it done in one of our recommended facilities" currentPage={3} />
        </div>      
    )
}


export default PageScreenthree
   