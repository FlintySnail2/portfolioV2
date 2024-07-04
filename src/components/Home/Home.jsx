import React, {useEffect, useState} from 'react'

import './Home.css';
import CTA from './cta';

const changingText = [
 'Graduate Software Developer', 'Analyst'
]




export default function Header () {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(( ) => {
    if (currentIndex === changingText.length - 1){
      console.log('Stop');
      return;
    }

    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      setCurrentIndex(updatedData);
    },500)
  return ( ) => clearInterval(interval)
  },[currentIndex])

  console.log('CUR INDEX', currentIndex)


  return (
    <header>
      <div className="header__container">
        <div className='home__image__high__res'>
          <div className='home__text'>
            <h5> Hi, I'm </h5>
            <h1> Harry Mclean </h1>
            <h5 className="text-light">{changingText[currentIndex]}</h5>
            <CTA/>
          </div>
        </div>
      </div>
    </header>
  )
}


