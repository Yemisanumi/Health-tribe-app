import React from 'react'
import Testimonials from '../Components/LandingPages/Testimonials'
import FrequentQuestion from '../Components/Faq/FrequentQuestion'
import MessageSection from '../Components/SendMessage/MessageSection'


const HomePage = () => {
  return (
    <div>
        <Testimonials/>
        <FrequentQuestion/>
        <MessageSection/>
    </div>
  )
}

export default HomePage;
