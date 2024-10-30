import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h3 className='font-extrabold text-[60px] text-center mt-16'> 
        <span className='text-[#17cd95]'>
           Discover Your Next Adventure with Al:
        </span> Personalized Itineraries at Your Fingertips 
      </h3>

        <p className='text-xl text-gray-500 text-center'>
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and bugdet.
        </p>
      <Button>Get Started</Button>
      
    </div>
  )
}

export default Hero
