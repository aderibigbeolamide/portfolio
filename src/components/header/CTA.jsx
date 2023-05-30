import React from 'react'
import CV from '../../assests/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} downlaod className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CTA