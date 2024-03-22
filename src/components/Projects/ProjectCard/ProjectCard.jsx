import React from "react";
import './ProjectCard.css';
import icons from '../../../assets/icons/sprite.svg';

function ProjectCard(props) {
    return (
        <div className="projectCard__container">
            <h2>{props.title}</h2>
            <img src={props.image} alt='' className="projectCard__image"></img>
            <div className="projectCard__content">
                {props.languages.map((lang, index) => {
                    return <p>{lang}</p>;
                })}     
            </div>

            <div className="projectCard__description">
                <p>{props.description}</p>
            </div>

            <div className="projectCard__links">
                <a href={props.github} className="projectCard__btn">
                    <svg className="projectCard__icon">
                        <use xlinkHref={`${icons}#icon-github`}/>
                    </svg>
                    View Source Code
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;
