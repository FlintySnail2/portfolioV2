import React from 'react'
import './Home.css';
import CTA from './cta';

const header = () => {
  return (
    <header>
      <div className="header__container">
        <div className='home__image__high__res'>
          <div className='home__text'>
            <h5> Hi, I'm </h5>
            <h1> Harry Mclean </h1>
            <h5 className="text-light">Aspiring Junior Software Developer</h5>
            <CTA/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header;
