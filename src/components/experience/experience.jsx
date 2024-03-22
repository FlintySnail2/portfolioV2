import React from 'react'
import './experience.css';
//import {AiFillCheckCircle} from 'react-icons/ai';
import icons from '../../assets/icons/sprite.svg';


//CHANGE FOR COMMITING ONLY

const frontEndExperience  = [
  {name: "HTML5", svgName: "#icon-html5"},
  {name: "CSS3", svgName: "#icon-css3"},
  {name: "JavaScript", svgName: "#icon-javascript"},
  {name: "Bootstrap", svgName: "#bootstrap"},
  {name: "ASP.NET", svgName: "#icon-dot-net"},
  {name: "React", svgName: "#icon-react"}

]

const backEndExperience = [
  {name: "C#", svgName:"#icon-csharp"},
  {name: ".NET", svgName: "#icon-dot-net"},
  {name: "SQL", svgName: "#SQL"},
]

const versionControlExperience = [
  {name: "GIT", svgName: "#icon-git"},
  {name: "GitHub", svgName: "#icon-github"}
]

const Experience = ()=> {
  const showColumns = (name, array) => {
    return (
      <div className='experience__column'>
        <h1 className='experience__category__title'>{name}</h1>
        <div className='experience__svg__container'>
          {array.map((svg, i) => (
            <div key={i} className="experience__card">
              <svg className='experience__svg'>
                <use xlinkHref={`${icons}${svg.svgName}`}/>
              </svg>
              <h1 className='experience__svg__name'>{svg.name}</h1>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div id='experience' className='experience__container'>
      <h1 className='experience__heading'>What I Have Learnt</h1>
      <div className='experience__row'>
        {showColumns("Frontend",frontEndExperience)}
        {showColumns("Backend", backEndExperience)}
        {showColumns("Version Control", versionControlExperience)} 
      </div>
    </div>
  )
}
export default Experience;
