import React from 'react'
import './experience.css';
import {AutoScroll} from "./autoScroll";
import icons from "../../assets/icons/sprite.svg";


//CHANGE FOR COMMITING ONLY
  //TODO: ADD ICONS
  // { name: 'PROGRESS', svgName: "#icon-"}


const experience = [
  { name: "HTML5", svgName: "#icon-html5" },
  { name: "CSS3", svgName: "#icon-css3" },
  { name: "JavaScript", svgName: "#icon-javascript" },
  { name: "Bootstrap", svgName: "#bootstrap" },
  { name: "ASP.NET", svgName: "#icon-dot-net" },
  { name: "React", svgName: "#icon-react" },
    { name: "C#", svgName: "#icon-csharp" },
    { name: ".NET", svgName: "#icon-dot-net" },
    { name: "SQL", svgName: "#SQL" },
    { name: "GIT", svgName: "#icon-git" },
    { name: "GitHub", svgName: "#icon-github" }
    ]

console.log('exp', experience);

const Experience = () => {

  return (
    <div id='experience' className='experience__container'>
      {/*<h1 className='experience__heading'>What I Have Learnt</h1>*/}
      {/*<div className='experience__row'>*/}


        <AutoScroll array={experience} speed={2500} className='experience__row'/>
      {/*</div>*/}
    </div>
  )
}
export default Experience;
