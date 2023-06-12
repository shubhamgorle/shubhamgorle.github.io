import React from "react";
import resume from '../Services/Shubham-Gorle-Resume.pdf'
import Toggle from "../Toggle/Toggle";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useContext } from "react";
import { themeContext } from "../../Context";
const Navbar = ({ handleClick, boolean }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleResumeLink = () => {
    window.open(resume, "_blank")
  }
  return (

    <div id="nav-menu" className={darkMode ? 'darknavbar' : 'lightnavbar'} style={{ position: 'fixed', top: '0', zIndex: '10', width: "91%" }}>
      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <div className="n-name">Shubham</div>
          <Toggle />
        </div>
        {/* right */}
        <div className="n-right" >
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

              <li className="nav-link skills">
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
              <li>    
                 <Link to="contact" spy={true} smooth={true} class="nav-link contact">
                Contact
              </Link>
              </li>
            </ul>
          </div>
          <a href={resume} download style={{ width: "6rem",padding:'-6rem -2rem' }} onClick={handleResumeLink} >
                <button className="button">Resume</button>
              </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
