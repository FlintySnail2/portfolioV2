import React from "react";
import './about.css';
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <div id="about">
      <div className='about__heading'>
        About Me
      </div>
        <div className='about__heading'>
            Skills
        </div>
      <div className="about__container">
          <div>
              <div><chip>FrontEnd</chip></div>
              <div>Backend</div>

          </div>
          <div>A bit about me</div>

      {/*<div className="about__content">*/}
      {/*  <div className="about__cards">*/}
      {/*    <article className="about__card">*/}
      {/*    <FaAward className='about_icon'/>*/}
      {/*      <h5> Experience</h5>*/}
      {/*      <small> ~ 1 Year</small>*/}
      {/*    </article>     */}
      {/*    <article className="about__card">*/}
      {/*    <VscFolderLibrary className='about_icon'/>*/}
      {/*      <h5> Projects</h5>*/}
      {/*      <small>6 </small> */}
      {/*    </article>*/}
      {/*  </div>*/}
      {/*</div>*/}
      </div>
    </div>
  )
}

export default About;