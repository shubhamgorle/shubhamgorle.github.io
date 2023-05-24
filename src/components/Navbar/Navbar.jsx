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
            <li className="nav-link home">
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li className="nav-link about">
              <Link to="services" spy={true} smooth={true}>
              About
              </Link>
            </li>
          
            <li  className="nav-link skills">
               <Link to="skill1" spy={true} smooth={true}>
              Skills
              </Link>
            </li>
            <li className="nav-link projects">
            {/* portfolio */}
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
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
