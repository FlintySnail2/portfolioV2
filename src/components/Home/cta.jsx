import React from 'react'
import CV from '../../assets/CV.pdf';
import './Home.css'

const CTA = () => {
  return (
    <div className='cta' >
        <a href={CV} download className='btn btn-cv' style={{color: 'white'}}>View CV</a>
        <a href="#contact" id='#contact' className='btn btn-contact' style={{color: 'white'}}> 
        Contact Me
        </a>
    </div>
  )
}
export default CTA;
