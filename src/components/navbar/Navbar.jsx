import React, {useState} from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from  'react-icons/ri';
import logo from '../../assets/logo.svg'



const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="marshalPfluger__navbar">
      <div className="marshalPfluger__navbar-links">
        <div className="marshalPfluger__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="marshalPfluger__navbar-links_container">
          <p><Link to="home" smooth duration={200}>Home </Link></p>
          <p><Link to="projects" smooth duration={200}>Projects </Link></p>
          <p><Link to="about" smooth duration={200}>About Me</Link></p>
          <p><Link to="resume" smooth duration={200}>Resume</Link></p>
        </div>
      </div>
      <div className="marshalPfluger__navbar-sign">
        <button type="button" onClick={() => scrollToSection('contact')}>Offer Feedback</button>
      </div>
      <div className="marshalPfluger__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="marshalPfluger__navbar-menu_container scale-up-center">
          <div className="marshalPfluger__navbar-menu_container-links">
            <p><Link to='home' smooth duration={200}>Home </Link></p>
            <p><Link to='projects' smooth duration={200}>Projects </Link></p>
            <p><Link to="about" smooth duration={200}>About Me</Link></p>
            <p><Link to="resume" smooth duration={200}>Resume</Link></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar
