import React from "react";
import './about.css';
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

// IMAGE TO BE IMPORTED
//import ME from '../../assets'

const About = () => {
  return (
    <div id="about">
      <div className='about__heading'>
        About Me
      </div>
      <div className="about__container"> 
        <div className="about__me">
        <p>
            My name is Harry Mclean and I am 29 years of 
            age from the Newcastle area. As of mid 2022 I  
            finished my Diploma of software development at TAFE NSW 
            (Northern Sydney Institute).
            <br/>
            <br/>
            In my spare time I'm always eager to expand on 
            my software development knowledge. Whether 
            it's learning a new language, frameworks, an  
            online course or working on my personal projects, I'm 
            always enjoying software development.
            <br/>
            <br/>
            If you have any questions or would like to get 
            in contact with me, please do not hesitate to use 
            the link at the bottom!
          </p>  
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
          <FaAward className='about_icon'/>
            <h5> Experience</h5>
            <small> ~ 1 Year</small>
          </article>     
          <article className="about__card">
          <VscFolderLibrary className='about_icon'/>
            <h5> Projects</h5>
            <small>6 </small> 
          </article>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About;