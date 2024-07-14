import React, {useEffect, useState} from 'react'

import './Home.css';
import CTA from './cta';
import Navbar from '../Navbar/Navbar';
import Experience from '../experience/experience'

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
      <div className="header__container">
        <div style={{display: 'flex', flexDirection: 'row', border: 'solid red', justifyContent: 'space-evenly'}}>
          <div style={{display: 'flex', border: 'purple solid', width: '500px', height: '500px', margin: '10px'}}>
            ABOUT ME
            <CTA/>
          </div>
          <div style={{display: 'flex', border: 'solid orange' ,background: 'orange',width: '500px', height: '500px', margin: '10px'}}>
            Picture
          </div>

        </div>
        <div><Experience/></div>
      </div>



      // <header>
      //   <div className="header__container">
    //     <div className='home__image__high__res'>
    //       <div className='home__text'>
    //         <h5> Hi, I'm </h5>
    //         <h1> Harry Mclean </h1>
    //         <h5 className="text-light">{changingText[currentIndex]}</h5>
    //         <CTA/>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  )
}


