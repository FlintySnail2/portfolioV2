import React from 'react'
import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';
import img1 from '../../assets/numberGuessingGame.png';
import img2 from '../../assets/BIT_Sys.png';
import img3 from '../../assets/onlineShopsml.png';


const Portfolio = () => {
  const projects = [
    {
      id:1,
      image: img1,
      title: 'Number Guessing Game',
      github: 'https://github.com/FlintySnail2/NumberGuessingGame',
      description: 'This is a number guessing game, where the user has to guess the correct number between 1 and 100',
      languages: ["Python"]

    },
    {
      id:2,
      image: img2,
      title: 'Job Management System',
      github: 'https://github.com/FlintySnail2/BIT_System',
      description: "This is a management solution for booking client jobs and assigning to an available contractor, it also includes CRUD functionality and both a web and desktop application",
      languages: ["C#", "ASP.NET", "Xaml"],
      
    },
    {
      id:3,
      image: img3,
      title: 'Online Fashion Store',
      github: 'https://github.com/FlintySnail2/ReactShopProject',
      description: 'This is an online fashion store where customers can add items to cart, create an account and place an order.',
      languages: ["JavaScript", "React Native"],
    }
  ]

  return(
    <div id='projects' className='projects__container'>
      <h1 className='projects__heading'>
        My Projects
      </h1>
      <div className='projects__row__container'>
        {projects.map((projects, index)=> (
          <ProjectCard
            key={index}
            title={projects.title}
            image={projects.image}
            languages={projects.languages}
            description={projects.description}
            github={projects.github}
            />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;
