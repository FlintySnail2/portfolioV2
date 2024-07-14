
import React from "react";
import './experience.css';
import icons from "../../assets/icons/sprite.svg";

const AutoScroll = ({ array, speed = 2500 }) => {
    return (<>
        <div className="experience__svg__container">
            <section style={{"--speed": `40ms`}}>
                {array.map((svg, i) => (
                    <div key={i} className="experience__card">
                        <svg className='experience__svg'>
                            <use xlinkHref={`${icons}${svg.svgName}`}/>
                        </svg>
                        <h1 className='experience__svg__name'>{svg.name}</h1>
                    </div>
                ))}

                    {array.map((svg, i) => (
                        <div key={i} className="experience__card">
                            <svg className='experience__svg'>
                                <use xlinkHref={`${icons}${svg.svgName}`}/>
                            </svg>
                            <h1 className='experience__svg__name'>{svg.name}</h1>
                        </div>
                    ))}
                </section>
            </div>
</>

            )
            ;
            };

            export {AutoScroll}
