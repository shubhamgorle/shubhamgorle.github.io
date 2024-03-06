import React from "react";
import resume from '../Services/Shubham-Gorle-Resume.pdf'
import Toggle from "../Toggle/Toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useContext } from "react";
import { themeContext } from "../../Context";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,

  // MenuItemOption,
  // MenuGroup,
  // MenuOptionGroup,
  // MenuDivider,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
const Navbar = ({ handleClick, boolean }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleResumeLink = () => {
    window.open(resume, "_blank")
  }
  return (

    <div id="nav-menu" className={darkMode ? 'darknavbar' : 'lightnavbar'} style={{ position: 'fixed', top: '0', zIndex: '10', width: "100%"}}>
      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <div className="n-name">Shubham</div>
          <Toggle />
        </div>
        {/* right */}
        <div className="n-right" >
          <div className="n-list" id={darkMode ? "darkkk" : "lighttt"}>
            <ul style={{ listStyleType: "none" }}>
              <li className="nav-link home">
                <Link activeClass="active" to="home" spy={true} smooth={true}>
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
          <a href={resume} download style={{ width: "6rem", padding: '-6rem -2rem' }} onClick={handleResumeLink} id="disable_resume">
            <button className="button">Resume</button>
          </a>
          <div id="hamburger_icon">
            <Menu >
              <MenuButton
                as={IconButton}
                // aria-label='Options'
                icon={<HamburgerIcon />}
               />
               
              <MenuList style={{color:darkMode ? 'black':"black"}}>
                <MenuItem >
                  <Link activeClass="active" to="home" spy={true} smooth={true} >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="services" spy={true} smooth={true} >
                    About
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="skill1" spy={true} smooth={true}>
                    Skills
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="projects" spy={true} smooth={true}>
                    Projects
                  </Link>
                </MenuItem>
                <MenuItem >
                  <Link to="contact" spy={true} smooth={true} class="nav-link contact">
                    Contact
                  </Link>
                </MenuItem>
                <MenuItem><a href={resume} download style={{ textDecoration:'none',color:'black' }} onClick={handleResumeLink} >
            Resume
          </a></MenuItem>
              </MenuList>
            </Menu></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
