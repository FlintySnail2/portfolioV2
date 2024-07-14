import React, { useState, useEffect } from "react";
import ScrollTo from "react-scroll-into-view";
import "./Navbar.css";

const menuOptions = {
  Portfolio: 'Portfolio',
  About: "Home",
  Experience: "Skills",
  Projects: "Projects",
  ContactMe: "Contact Me",
}

export default function Navbar() {
  const [nav, setNav] = useState("");

  // Animation for navbar to decrease in size when scrolling down
  useEffect(() => {
    document.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 10) {
          setNav("nav-collapse");
        } else {
          setNav("");
        }
      },
      { capture: false, passive: true }
    );
  }, []);

  // console.log('MenuOptions', menuOptions.Experience);

  return <nav className={'nav'}>

    {/*<div className={'aaa'}>*/}
    {/*  <p>{menuOptions.Portfolio}</p>*/}
    {/*</div>*/}

    <div className='nav-links'>


      <div className={'menuItems'}>
        <p>{menuOptions.About}</p>
        <p>{menuOptions.Experience}</p>
        <p>{menuOptions.Projects}</p>
        <p>{menuOptions.ContactMe}</p>
      </div>
    </div>
    {/*<div className="logo">*/}


    {/*</div>*/}
    <div className="burger">
      {/*  <div className="line1"></div>*/}
      {/*  <div className="line2"></div>*/}
      {/*  <div className="line3"></div>*/}
    </div>
  </nav>
};

