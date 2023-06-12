import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Phone from "@iconscout/react-unicons/icons/uil-phone";
import linkedin from '../../img/linkedin.png'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span id="contact-email">shubhamgorle.me@sbjit.edu.in</span>
        <div className="f-icons">
       <a href="https://github.com/shubhamgorle" id="contact-github"  target="_blank"  rel="noreferrer"> <Gitub color="white" size={"3rem"} /></a>  
       <a href="https://www.linkedin.com/in/shubham-gorle/" id="contact-linkedin" target="_blank"   rel="noreferrer"> <Facebook color="white" size={"3rem"} /></a>  
       <a href="https://www.instagram.com/shubh_am09/?next=%2F" target="_blank"   rel="noreferrer"><Insta color="white" size={"3rem"} /></a>    
       <a href="tel:+919359292560" id="contact-phone" target="_blank"  rel="noreferrer" ><Phone color="white" size={"3rem"} /></a>    
        </div>
      </div>
    </div>
  );
};

export default Footer;
