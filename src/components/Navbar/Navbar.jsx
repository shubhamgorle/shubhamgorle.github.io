import React from "react";
import resume from '../Services/resume.pdf'
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useContext } from "react";
import { themeContext } from "../../Context";
const Navbar = () => {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    <div id="nav-menu">
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Shubham</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li class="nav-link home">
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li class="nav-link about">
              <Link to="services" spy={true} smooth={true}>
              About
              </Link>
            </li>
          
            <li  class="nav-link skills">
               <Link to="skill1" spy={true} smooth={true}>
              Skills
              </Link>
            </li>
            <li class="nav-link projects">
            {/* portfolio */}
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
            <a target="_blank" rel="noreferrer" href={resume} download={resume} id="resume-button-1"  class="nav-link resume" style={{textDecoration:"none", color: darkMode ? "white" : "black" }}>Resume</a>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true} class="nav-link contact">
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
