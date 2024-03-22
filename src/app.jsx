import React, {useEffect} from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

function App() {
  useEffect(() => {
    navSlide();
  });

//const App = () => {
    return (
    <div className='app__container'>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App