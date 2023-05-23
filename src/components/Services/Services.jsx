import React, { useContext } from "react";
import "./Services.css";

import { themeContext } from "../../Context";

import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="services" id="services about section">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About Me</span>
        <span></span>
        <span >
        I am a full stack web developer with a passion for learning and growing in the field of web development.<br/>
        I am enthusiastic about exploring new technologies and frameworks, and I am excited to learn and work.<br/>
        with new tools in order to deliver out of the box solution with complete ownership.
        </span>
        <a href={Resume} download style={{width:"8rem"}}>
          <button className="button s-button"  id="resume-button-2">Download CV</button>
        </a>
      
      </div>
      {/* right */}
    </div>
  );
};

export default Services;





{/* <div className="cards">
<motion.div
  initial={{ left: "25rem" }}
  whileInView={{ left: "14rem" }}
  transition={transition}
>
  <Card
    emoji={HeartEmoji}
    heading={"Design"}
    detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
  />
</motion.div>

<motion.div
  initial={{ left: "-11rem", top: "12rem" }}
  whileInView={{ left: "-4rem" }}
  transition={transition}
>
  <Card
    emoji={Glasses}
    heading={"Developer"}
    detail={"Html, Css, JavaScript, React, Nodejs, Express"}
  />
</motion.div>

<motion.div
  initial={{ top: "19rem", left: "25rem" }}
  whileInView={{ left: "12rem" }}
  transition={transition}
>
  <Card
    emoji={Humble}
    heading={"UI/UX"}
    detail={
      "Lorem ispum dummy text are usually use in section where we need some random text"
    }
    color="rgba(252, 166, 31, 0.45)"
  />
</motion.div>
<div
  className="blur s-blur2"
  style={{ background: "var(--purple)" }}
></div>
</div> */}