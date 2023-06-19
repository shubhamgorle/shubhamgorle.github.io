import React from 'react'
import styled from 'styled-components'
// import html from '../Resources/Images/LanguageImages/html5.png'
import html from '../../img/html5.png'
import css from '../../img/css3.png'
import js from '../../img/js.png'
import git from '../../img/git.png'
import mongodb from '../../img/mongodb.png'
import nodejs from '../../img/nodejs.png'
import react from '../../img/react.png'
import reactredux from '../../img/redux.png'
import mern from '../../img/mern.png'
import './skills.css'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import vscode from '../../img/vscode.webp'
import postman from '../../img/postman-icon.png'
import github from '../../img/githubb.png'
import vite from '../../img/vite.png'
// vs code postmen git vite aws
// #e9e9e9;
const Skills = () => {
    const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
    const skills = [
        {
            img:html,
            title:'HTML'
        },
        {
            img:css,
            title:'CSS'
        },
        {
            img:js,
            title:'Javascript'
        },
        {
            img:git,
            title:'Git/Github'
        },
        {
            img:mongodb,
            title:'MongoDB'
        },
        {
            img:nodejs,
            title:'NodeJS'
        },
        {
            img:react,
            title:'ReactJS'
        },
        {
            img:mern,
            title:'MERN'
        }
    ]
  const tools = [
    {
        img:vscode,
        title:'VS Code'
    },
    {
        img:postman,
        title:'Postman'
    },
    {
        img:github,
        title:'github'
    },
    {
        img:vite,
        title:'Vite'
    }
  ]
  return (
    <>
    <div className="skill1" id='skills'>
         <div style={{height:"40px"}}></div>
         <div id='skill_div'>
      <span style={{ color: darkMode ? "white" : "" ,textAlign:"center"}}  id='skillspan'>Skills</span></div>
    
      <div style={{height:"80px"}}></div>
          <Container id='skills'>
        <div className='skillsContainer'>
            {skills.map((ele,index)=>(
                <div key={index}  class="skills-card">
                    <img src={ele.img} alt={ele.title} width='70px' height='70px' class="skills-card-img"/>
                    <p class="skills-card-name">{ele.title}</p>
                </div>
            ))}
        </div>
    </Container>
    </div>


    <div className="skill1" id='skills'>
         <div style={{height:"40px"}}></div>
         <div className='skill_div'>
      <span style={{ color: darkMode ? "white" : "" ,textAlign:"center"}}  id='skillspan'>Tools</span></div>
     
      <div style={{height:"80px"}}></div>
          <Container id='skills'>
        <div className='skillsContainer'>
            {tools.map((ele,index)=>(
                <div key={index}  class="skills-card">
                    <img src={ele.img} alt={ele.title} width='70px' height='70px' class="skills-card-img"/>
                    <p class="skills-card-name">{ele.title}</p>
                </div>
            ))}
        </div>
    </Container>
    </div>
    </>
  )
}

const Container = styled.div`
    width:100%;
    margin:auto;
    
    h1{
        color:#01a479;
        text-transform:uppercase;
    }

    .skillsContainer{
        width:85%;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,max-content));
        justify-content:center;
        padding:30px;
        gap:20px;
    }

    .skillsContainer>div{
       display:flex;
       align-items:center;
       flex-direction:column;
       box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
       padding: 20px 0px 10px 0px;
       border-radius: 10px;
    }

    .skillsContainer>div:hover{
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        -webkit-transition: all 0.8s;
        transition: all 0.8s;
     }
   
`

export default Skills









