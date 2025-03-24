import React, { useEffect, useState } from 'react'

import './Home.css';
import CTA from './cta';
import AboutText from '../about/aboutText';

import Experience from '../experience/experience'

const changingText = [
  'Graduate Software Developer', 'Analyst'
]

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === changingText.length - 1) {
      console.log('Stop');
      return;
    }

    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      setCurrentIndex(updatedData);
    }, 500)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="header__container">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '10px', boxShadow: '0 0 10px #dfdfdf', width: '600px', height: '500px', margin: '10px', padding: '10px'}}>
          <div>ABOUT ME</div>
          <div>
            <AboutText />
            <CTA />
          </div>
        </div>
        <div style={{ display: 'flex', borderRadius: '10px', boxShadow: '0 0 10px #dfdfdf', width: '600px', height: '500px', margin: '10px',padding: '10px' }}>
          Picture
        </div>
      </div>
      <div><Experience /></div>
    </div>
  )
}


