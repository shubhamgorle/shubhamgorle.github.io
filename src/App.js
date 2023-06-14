import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Aos from "aos";
import Skills from "./components/skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/projects/Project";
import { useContext,useState,useEffect } from "react";
import { themeContext } from "./Context";
import Github from "./components/Github";
import PraciceNav from "./components/PraciceNav";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  let [boolean, setBoolean] = useState(true);
  function handleClick() {
    setBoolean(!boolean);
    // console.log(boolean);
  }
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div > <Navbar  handleClick={handleClick} boolean={boolean}/></div>
     
      <Intro />
      {/* Services pagee is About page */}
      <Services />    
      {/* <Experience /> Services pagee is About page*/}
     
      <Skills />
      <Projects/>
      <Github/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
